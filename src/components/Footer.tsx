import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
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
    { icon: MapPin, text: "Kano, Nigeria", href: "https://maps.app.goo.gl/tkP6Bmp7WNF2BaVJ8" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/p/Sankara-Nigeria-Limited-100063949339124/" },
    { name: "Instagram", icon: Instagram, href: "https://share.google/b5GVVPBJ6KHde2POO" },
    { name: "Twitter", icon: Twitter, href: "https://share.google/4xAJPrLcH0fvfUlaP" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/sankara-nigeria-limited/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8 max-w-7xl relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5" aria-label="Sankara Nigeria Limited Home">
              <img
                src="/Sankara%20Logo.png"
                alt="Sankara Nigeria Limited Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nigeria's trusted partner for premium tractors, farm implements, and genuine spare parts. Driving agricultural growth since 1986.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary inline-block" />
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary inline-block" />
              Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary inline-block" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {navigation.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="mt-1 leading-snug">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sankara Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
