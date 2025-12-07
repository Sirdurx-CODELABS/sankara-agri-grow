import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Check,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Headphones,
  Shield,
  Truck,
  Wrench,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Building2,
  Handshake,
  Globe,
  Zap,
  GraduationCap
} from "lucide-react";
import heroImage from "@/assets/hero-tractor.jpg";
import tractorMassey from "@/assets/tractor-massey.jpg";
import farmImplements from "@/assets/farm-implements.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower Nigerian farmers with world-class agricultural machinery that enhances productivity, reduces labor costs, and drives sustainable agricultural growth across the nation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be Nigeria's most trusted and preferred partner for agricultural mechanization, setting the standard for quality, reliability, and customer service in the industry.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, excellence, and customer satisfaction guide everything we do. We believe in building lasting relationships through honest dealings and superior service.",
  },
];

const milestones = [
  {
    year: "2009",
    icon: Building2,
    title: "Company Founded",
    description: "Sankara Nigeria Limited was established with a vision to transform Nigerian agriculture through reliable machinery.",
    side: "left",
  },
  {
    year: "2012",
    icon: Handshake,
    title: "First Major Partnership",
    description: "Became authorized dealer for Massey Ferguson, establishing our reputation for quality and reliability.",
    side: "right",
  },
  {
    year: "2015",
    icon: Globe,
    title: "Nationwide Expansion",
    description: "Expanded operations to serve farmers across all 36 states of Nigeria with comprehensive delivery network.",
    side: "left",
  },
  {
    year: "2017",
    icon: Truck,
    title: "500+ Tractors Delivered",
    description: "Reached milestone of delivering over 500 tractors, becoming one of Nigeria's leading agricultural machinery suppliers.",
    side: "right",
  },
  {
    year: "2019",
    icon: Shield,
    title: "Genuine Parts Network",
    description: "Established nationwide spare parts distribution network ensuring authentic OEM parts availability.",
    side: "left",
  },
  {
    year: "2021",
    icon: Headphones,
    title: "24/7 Support Launch",
    description: "Launched round-the-clock customer support and technical assistance services for all clients.",
    side: "right",
  },
  {
    year: "2023",
    icon: GraduationCap,
    title: "Training Program",
    description: "Introduced comprehensive operator training programs, training over 200 farmers in machinery operation.",
    side: "left",
  },
  {
    year: "2024",
    icon: Zap,
    title: "1200+ Tractors Delivered",
    description: "Achieved major milestone of delivering over 1200 tractors, supporting 5000+ farmers across Nigeria.",
    side: "right",
  },
  {
    year: "2025",
    icon: Award,
    title: "Industry Recognition",
    description: "Participated in Kura 2025 Agricultural Exhibition, showcasing our commitment to agricultural development.",
    side: "left",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Centered with New Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Different from Homepage */}
        <div className="absolute inset-0">
          <img
            src={farmImplements}
            alt="Farm implements and agricultural equipment"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/85" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20 animate-pulse" />
          {/* Additional Gradient Blend */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        </div>

        {/* Centered Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* About Us Label */}
            <div
              className="mb-6"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Powering Nigeria's{" "}
              <span className="text-accent drop-shadow-lg">Agricultural Future</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              For over 15 years, Sankara Nigeria Limited has been at the forefront of agricultural mechanization, providing farmers with world-class machinery, genuine parts, and unwavering support to transform Nigerian agriculture.
            </p>

            {/* CTA Buttons - Centered */}
            <div
              className="flex flex-wrap justify-center gap-4 lg:gap-6"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Company Story Section - Enhanced */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative" data-aos="fade-right" data-aos-duration="900">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Sankara team at work"
                  className="w-full h-full object-cover aspect-square"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              {/* Floating Stat Badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 lg:p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <p className="font-display text-4xl lg:text-5xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>

            {/* Text Column */}
            <div data-aos="fade-left" data-aos-duration="900">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Company Story</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                A Legacy of Agricultural Excellence
              </h2>

              <div className="space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <p className="font-semibold text-foreground">
                  Founded with a vision to transform Nigerian agriculture, Sankara Nigeria Limited has grown from a small tractor dealership to one of the country's leading agricultural machinery suppliers.
                </p>
                <p>
                  Our journey began over 15 years ago when our founders recognized the critical need for reliable, high-quality farming equipment in Nigeria. Since then, we've built strategic partnerships with world-renowned manufacturers including Massey Ferguson, Lovol, and Zoomlion, establishing a reputation for excellence and trust.
                </p>
                <p>
                  Today, we proudly serve farmers across all 36 states of Nigeria, providing them with premium tractors, comprehensive farm implements, and genuine spare parts. Our commitment to quality, customer service, and agricultural development has made us a trusted partner in Nigeria's agricultural transformation.
                </p>
              </div>

              {/* Mission & Vision Highlights */}
              <div className="mt-8 p-6 rounded-2xl bg-card border border-border/50 shadow-xl">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Our Mission
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      To empower Nigerian farmers with world-class agricultural machinery that enhances productivity, reduces labor costs, and drives sustainable agricultural growth across the nation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      Our Vision
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      To be Nigeria's most trusted and preferred partner for agricultural mechanization, setting the standard for quality, reliability, and customer service in the industry.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      Our Values
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Integrity, excellence, and customer satisfaction guide everything we do. We believe in building lasting relationships through honest dealings and superior service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - New */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted Partner in Agricultural Success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We go beyond selling machinery. We provide comprehensive solutions, unwavering support, and genuine commitment to your agricultural success.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Headphones,
                title: "24/7 Customer Support",
                description: "Round-the-clock assistance for all your queries, technical support, and emergency services. We're always here when you need us.",
              },
              {
                icon: Shield,
                title: "Genuine Spare Parts",
                description: "100% authentic OEM parts ensuring optimal performance, longevity, and warranty compliance for all your machinery needs.",
              },
              {
                icon: Truck,
                title: "Nationwide Tractor Delivery",
                description: "Reliable delivery services covering all 36 states of Nigeria. Your equipment reaches you safely and on time, anywhere in the country.",
              },
              {
                icon: Users,
                title: "Trained Technical Experts",
                description: "Certified technicians with extensive training and experience. Expert maintenance, repairs, and consultation services you can trust.",
              },
              {
                icon: Wrench,
                title: "After-Sales Maintenance",
                description: "Comprehensive maintenance programs, scheduled servicing, and emergency repairs to keep your machinery running at peak performance.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 lg:p-10 rounded-2xl border border-border/50 bg-card shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section - New */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Transforming Nigerian Agriculture
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Numbers that reflect our commitment to empowering farmers and driving agricultural growth across Nigeria.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                value: "1200+",
                label: "Tractors Delivered",
                icon: Truck,
                gradient: "from-primary to-primary/80",
              },
              {
                value: "5000+",
                label: "Farmers Supported",
                icon: Users,
                gradient: "from-accent to-accent/80",
              },
              {
                value: "15+",
                label: "Years Industry Experience",
                icon: Award,
                gradient: "from-primary to-accent",
              },
              {
                value: "300+",
                label: "Annual Maintenance Jobs",
                icon: TrendingUp,
                gradient: "from-accent to-primary",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm lg:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones of Excellence - Tree-View Timeline */}
      <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div
            className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4">
              Milestones of Excellence
            </h2>
            <p className="text-primary-foreground/80 text-lg mt-4">
              A timeline of our growth and achievements in transforming Nigerian agriculture
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Vertical Line - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 z-0" />

            {/* Milestones */}
            <div className="space-y-12 lg:space-y-20">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = milestone.side === "left";

                return (
                  <div
                    key={index}
                    className="relative flex flex-col lg:flex-row items-center"
                    data-aos={isLeft ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-duration="800"
                  >
                    {/* Left Side Content - Desktop */}
                    {isLeft && (
                      <div className="hidden lg:flex flex-1 justify-end pr-8">
                        <div className="w-full max-w-md text-right">
                          <div className="p-6 lg:p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                            <div className="mb-2">
                              <span className="px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-bold text-sm">
                                {milestone.year}
                              </span>
                            </div>
                            <h3 className="font-display text-xl lg:text-2xl font-bold text-primary-foreground mb-3">
                              {milestone.title}
                            </h3>
                            <p className="text-primary-foreground/90 leading-relaxed text-sm lg:text-base">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Central Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent border-4 border-primary-foreground flex items-center justify-center shadow-2xl">
                        <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Right Side Content - Desktop */}
                    {!isLeft && (
                      <div className="hidden lg:flex flex-1 justify-start pl-8">
                        <div className="w-full max-w-md text-left">
                          <div className="p-6 lg:p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                            <div className="mb-2">
                              <span className="px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-bold text-sm">
                                {milestone.year}
                              </span>
                            </div>
                            <h3 className="font-display text-xl lg:text-2xl font-bold text-primary-foreground mb-3">
                              {milestone.title}
                            </h3>
                            <p className="text-primary-foreground/90 leading-relaxed text-sm lg:text-base">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile/Tablet Layout - Single Column */}
                    <div className="lg:hidden w-full mt-8 max-w-md mx-auto">
                      <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 shadow-xl">
                        <div className="mb-3 text-center">
                          <span className="px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-bold text-sm">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-primary-foreground mb-3 text-center">
                          {milestone.title}
                        </h3>
                        <p className="text-primary-foreground/90 leading-relaxed text-sm text-center">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-xl">
              <span className="font-display text-4xl lg:text-5xl font-bold text-primary">"</span>
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 lg:mb-8 leading-relaxed">
              Our commitment goes beyond selling machinery. We're dedicated to empowering Nigerian farmers with the tools, knowledge, and support they need to transform agriculture and feed our nation.
            </blockquote>
            <p className="text-muted-foreground font-semibold text-lg">— Management, Sankara Nigeria Limited</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section - New */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Partner With Us Today
            </h2>
            <p className="text-muted-foreground mb-10 text-lg lg:text-xl leading-relaxed">
              Join thousands of successful farmers across Nigeria who trust Sankara for their agricultural machinery needs. Let's grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary shadow-xl hover:scale-105 transition-transform duration-300"
                asChild
              >
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
