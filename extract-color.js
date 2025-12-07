const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Try to use canvas, if not available, use a simpler approach
loadImage('public/Sankara Logo.png')
  .then(img => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const pixels = imageData.data;
    
    // Sample pixels (every 10th pixel for performance)
    const colors = [];
    for (let i = 0; i < pixels.length; i += 40) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = pixels[i + 3];
      
      // Skip transparent and very light pixels
      if (a > 128 && (r + g + b) < 700) {
        colors.push({ r, g, b });
      }
    }
    
    // Find most common color
    const colorMap = {};
    colors.forEach(c => {
      const key = `${Math.floor(c.r/10)}_${Math.floor(c.g/10)}_${Math.floor(c.b/10)}`;
      colorMap[key] = (colorMap[key] || 0) + 1;
    });
    
    const dominant = Object.entries(colorMap).sort((a, b) => b[1] - a[1])[0];
    const [r, g, b] = dominant[0].split('_').map(x => parseInt(x) * 10);
    
    // Convert RGB to HSL
    const r_norm = r / 255;
    const g_norm = g / 255;
    const b_norm = b / 255;
    
    const max = Math.max(r_norm, g_norm, b_norm);
    const min = Math.min(r_norm, g_norm, b_norm);
    const delta = max - min;
    
    let h = 0;
    if (delta !== 0) {
      if (max === r_norm) {
        h = ((g_norm - b_norm) / delta) % 6;
      } else if (max === g_norm) {
        h = (b_norm - r_norm) / delta + 2;
      } else {
        h = (r_norm - g_norm) / delta + 4;
      }
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    
    const l = (max + min) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    const h_deg = h;
    const s_percent = Math.round(s * 100);
    const l_percent = Math.round(l * 100);
    
    console.log(`RGB: rgb(${r}, ${g}, ${b})`);
    console.log(`HSL: ${h_deg} ${s_percent}% ${l_percent}%`);
    console.log(`CSS: ${h_deg} ${s_percent}% ${l_percent}%`);
  })
  .catch(err => {
    console.error('Error:', err.message);
    console.log('Canvas not available, using fallback color');
    console.log('Suggested: 142 70% 45%');
  });
