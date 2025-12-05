import { Layout } from "@/components/Layout";
import { Check, Target, Eye, Heart } from "lucide-react";
import heroImage from "@/assets/hero-tractor.jpg";

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

const achievements = [
  "Authorized dealer for Massey Ferguson, Lovol, and Zoomlion",
  "Successfully delivered 500+ tractors across Nigeria",
  "Nationwide spare parts distribution network",
  "24/7 technical support and maintenance services",
  "Participated in Kura 2025 Agricultural Exhibition",
  "Trained over 200 farmers in machinery operation",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Agricultural machinery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Powering Nigeria's{" "}
              <span className="text-primary">Agricultural Future</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 15 years, Sankara Nigeria Limited has been at the forefront of agricultural mechanization, providing farmers with the tools they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of Agricultural Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to transform Nigerian agriculture, Sankara Nigeria Limited has grown from a small tractor dealership to one of the country's leading agricultural machinery suppliers.
                </p>
                <p>
                  Our journey began over 15 years ago when our founders recognized the critical need for reliable, high-quality farming equipment in Nigeria. Since then, we've built partnerships with world-renowned manufacturers and established a reputation for excellence.
                </p>
                <p>
                  Today, we proudly serve farmers across all 36 states of Nigeria, providing them with premium tractors from Massey Ferguson, Lovol, and Zoomlion, along with a comprehensive range of farm implements and genuine spare parts.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                <img
                  src={heroImage}
                  alt="Sankara team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <p className="font-display text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-xl border border-border hover-lift bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Achievements</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mt-2">
              Milestones of Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/10 backdrop-blur animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-accent-foreground" />
                </div>
                <p className="text-primary-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="font-display text-3xl font-bold text-primary">"</span>
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl text-foreground mb-6 leading-relaxed">
              Our commitment goes beyond selling machinery. We're dedicated to empowering Nigerian farmers with the tools, knowledge, and support they need to transform agriculture and feed our nation.
            </blockquote>
            <p className="text-muted-foreground font-semibold">— Management, Sankara Nigeria Limited</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
