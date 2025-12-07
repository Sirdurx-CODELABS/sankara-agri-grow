import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Massey Ferguson Tractors", href: "/products?category=massey-ferguson" },
    { name: "Lovol Tractors", href: "/products?category=lovol" },
    { name: "Zoomlion Tractors", href: "/products?category=zoomlion" },
    { name: "Farm Implements", href: "/products?category=implements" },
    { name: "Spare Parts", href: "/products?category=spare-parts" },
  ],
  contact: [
    { icon: Phone, text: "Sales: +234 809 993 3644", href: "tel:+2348099933644" },
    { icon: Phone, text: "Parts: +234 802 648 7775", href: "tel:+2348026487775" },
    { icon: Mail, text: "sankaranigerialimited@gmail.com", href: "mailto:sankaranigerialimited@gmail.com" },
    { icon: MapPin, text: "Nigeria", href: "#" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ],
};

export function Footer() {
  return (
    <footer 
      className="dark-gradient text-secondary-foreground relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6" aria-label="Sankara Nigeria Limited Home">
              <img
                src="/Sankara%20Logo.png"
                alt="Sankara Nigeria Limited Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Driving agricultural growth with reliable machinery. Your trusted partner for tractors, farm implements, and genuine spare parts.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-12 h-12 rounded-xl bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-secondary-foreground">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-secondary-foreground">Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-secondary-foreground">Contact Us</h3>
            <ul className="space-y-4">
              {navigation.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sankara Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
