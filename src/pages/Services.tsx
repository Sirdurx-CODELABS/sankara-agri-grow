import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Tractor,
  Wrench,
  Settings,
  Shield,
  Award,
  Truck,
  GraduationCap,
  ArrowRight,
  Cog,
  Gauge,
  Hammer,
  Scissors,
  CheckCircle,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Phone,
  MessageCircle,
  Zap,
} from "lucide-react";
import spareParts from "@/assets/spare-parts.jpg";

const services = [
  {
    icon: Wrench,
    title: "Tractor Maintenance & Repairs",
    description: "Professional maintenance and repair services by certified technicians. Keep your tractors running at peak performance with scheduled maintenance and emergency repairs.",
    features: ["24/7 Emergency Support", "Certified Technicians", "Genuine Parts Only"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Farm Implements Installation",
    description: "Expert installation and setup of all farm implements including ploughs, harrows, sprayers, and cultivation equipment. Proper installation ensures optimal performance.",
    features: ["Professional Setup", "Performance Testing", "Usage Training"],
    color: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Agricultural Training Sessions",
    description: "Comprehensive training programs for farmers and operators on modern agricultural techniques, machinery operation, and maintenance. Hands-on sessions to maximize productivity and safety.",
    features: ["Hands-On Training", "Expert Instructors", "Certification Provided"],
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: Cog,
    title: "Genuine Spare Parts Supply",
    description: "100% authentic OEM spare parts ensuring optimal performance and longevity. Extensive inventory for all brands with fast nationwide delivery.",
    features: ["100% Authentic OEM", "Fast Delivery", "Extensive Inventory"],
    color: "from-orange-500/20 to-red-500/20",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    icon: Gauge,
    title: "Hydraulics & Transmission Service",
    description: "Specialized service for hydraulic systems and transmission components. Expert diagnostics, repairs, and replacements to keep your machinery operating smoothly.",
    features: ["Advanced Diagnostics", "Expert Repairs", "Quality Guaranteed"],
    color: "from-indigo-500/20 to-blue-500/20",
    iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
  },
  {
    icon: Truck,
    title: "On-Site Farm Machinery Support",
    description: "Mobile service team available for on-site repairs and maintenance. We come to your farm to minimize downtime and keep your operations running.",
    features: ["Mobile Service", "Quick Response", "Minimize Downtime"],
    color: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500",
  },
  {
    icon: Hammer,
    title: "Engine Overhaul & Diagnostics",
    description: "Comprehensive engine diagnostics and complete overhaul services. Expert technicians use advanced equipment to identify and fix engine issues efficiently.",
    features: ["Complete Overhaul", "Advanced Equipment", "Efficient Service"],
    color: "from-yellow-500/20 to-orange-500/20",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
  {
    icon: Scissors,
    title: "Harvesting Equipment Services",
    description: "Specialized maintenance and repair services for harvesting equipment. Keep your harvesters, combines, and related machinery in perfect working condition.",
    features: ["Specialized Service", "Peak Season Ready", "Expert Maintenance"],
    color: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Scheduled Preventive Maintenance",
    description: "Proactive maintenance programs designed to prevent breakdowns and extend equipment lifespan. Regular servicing keeps your machinery reliable and efficient.",
    features: ["Prevent Breakdowns", "Extend Lifespan", "Regular Servicing"],
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section - Services with Machinery Maintenance Background */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/new/backgrounds/bglaeste.jpeg"
            alt="Agricultural machinery spare parts and service"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30 z-10" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-white font-semibold text-sm">Premium Agricultural Services</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Expert Solutions for
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Modern Farming
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              From maintenance to training, we deliver comprehensive agricultural services that keep your operations running smoothly and efficiently.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-all duration-300 group" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="shadow-xl hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20" asChild>
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </div>

            {/* Stats - Positioned Higher to Avoid Wave Overlap */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto relative z-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {[
                { icon: Users, label: "Happy Clients", value: "500+" },
                { icon: Award, label: "Years Experience", value: "15+" },
                { icon: CheckCircle, label: "Services Offered", value: "9+" },
                { icon: TrendingUp, label: "Success Rate", value: "98%" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave - Adjusted Position */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Services Grid Section - Modern Card Design */}
      <section className="py-20 lg:py-32 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold text-sm">What We Offer</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Comprehensive solutions designed to keep your agricultural operations running at peak efficiency
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  data-aos-duration="600"
                >
                  {/* Card */}
                  <div className="relative h-full bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Why Choose Us</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Your Trusted Agricultural Partner
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over 15 years of experience, we've built a reputation for excellence in agricultural services. Our commitment to quality and customer satisfaction sets us apart.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, title: "Certified Technicians", desc: "Expert team with industry certifications" },
                  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock emergency assistance" },
                  { icon: Award, title: "Quality Guaranteed", desc: "100% satisfaction on all services" },
                  { icon: Truck, title: "Fast Response", desc: "Quick on-site service delivery" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div data-aos="fade-left" className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
                { icon: Award, value: "15+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
                { icon: CheckCircle, value: "9+", label: "Services", color: "from-green-500 to-emerald-500" },
                { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <div key={index} className="group relative bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  
                  {/* Label */}
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 lg:py-32 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Training & Education</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Agricultural Training Programs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Empower your team with expert knowledge and hands-on training
            </p>
          </div>

          {/* Training Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Tractor,
                title: "Machinery Operation",
                desc: "Master tractor and implement operation with hands-on training",
                color: "from-blue-500 to-cyan-500",
                features: ["Safety Protocols", "Implement Usage", "Field Techniques"]
              },
              {
                icon: Wrench,
                title: "Maintenance & Repair",
                desc: "Learn essential maintenance and troubleshooting skills",
                color: "from-purple-500 to-pink-500",
                features: ["Preventive Care", "Troubleshooting", "Parts Replacement"]
              },
              {
                icon: Award,
                title: "Modern Techniques",
                desc: "Stay updated with latest agricultural practices",
                color: "from-green-500 to-emerald-500",
                features: ["Precision Farming", "Sustainability", "Soil Management"]
              },
            ].map((training, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${training.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <training.icon className="h-10 w-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {training.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {training.desc}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {training.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Training CTA */}
          <div 
            className="mt-16 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20"
            data-aos="zoom-in"
          >
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Ready to Enhance Your Skills?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Join our next training session and take your agricultural expertise to the next level
              </p>
              <Button variant="default" size="lg" className="shadow-lg hover:scale-105 transition-all duration-300 group" asChild>
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-aos="zoom-in"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Need Expert Agricultural Support?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg lg:text-xl leading-relaxed">
              Our team is ready to provide personalized solutions for your farming needs. Get in touch today for professional service and support.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-all duration-300 group" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5" />
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" className="shadow-xl hover:scale-105 transition-all duration-300 group" asChild>
                <a href="https://wa.me/2348099933644" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;