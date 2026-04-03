import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Headphones,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/new/backgrounds/bglaeste.jpeg"
            alt="Agricultural machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 z-10" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
              data-aos="fade-down"
            >
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-white font-semibold text-sm">Expert Support Available 24/7</span>
            </div>

            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Let's Discuss Your
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Farming Needs
              </span>
            </h1>

            <p
              className="text-xl text-white/85 mb-12 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our agricultural machinery experts are ready to help you find the right equipment, spare parts, or service solution for your operation.
            </p>

            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
              <Button variant="hero" size="lg" className="shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="tel:+2348099933644">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://wa.me/2348099933644" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
      </section>

      {/* Quick Contact Strips */}
      <section className="bg-primary py-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {[
              { icon: Phone, label: "Sales Line", value: "+234 809 993 3644", href: "tel:+2348099933644" },
              { icon: Mail, label: "Email Us", value: "sankaranigerialimited@gmail.com", href: "mailto:sankaranigerialimited@gmail.com" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 8:00 AM – 6:00 PM", href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-5">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white text-sm font-semibold hover:text-white/80 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Information</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a new tractor, spare parts, maintenance service, or expert advice — our team is ready to assist you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["Sales: +234 809 993 3644", "Parts: +234 802 648 7775"],
                    href: "tel:+2348099933644",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["sankaranigerialimited@gmail.com"],
                    href: "mailto:sankaranigerialimited@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    lines: ["Kano, Nigeria"],
                    href: "https://maps.app.goo.gl/tkP6Bmp7WNF2BaVJ8",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 9:00 AM – 4:00 PM"],
                    href: null,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                      {item.lines.map((line, idx) => (
                        item.href && idx === 0 ? (
                          <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={idx} className="text-sm text-muted-foreground">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Why Choose Sankara</h3>
                <div className="space-y-3">
                  {[
                    "40+ years of agricultural expertise",
                    "Genuine OEM spare parts",
                    "Nationwide delivery across Nigeria",
                    "Certified technical support team",
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="bg-card rounded-3xl border border-border/50 shadow-xl overflow-hidden">
                {/* Form Header */}
                <div className="hero-gradient px-8 py-6">
                  <h3 className="font-display text-2xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-white/80 text-sm mt-1">We'll respond within 24 business hours</p>
                </div>

                {/* Form Body */}
                <div className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="rounded-xl border-border/60 focus:border-primary h-11"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="you@example.com"
                                  className="rounded-xl border-border/60 focus:border-primary h-11"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+234 xxx xxx xxxx"
                                  className="rounded-xl border-border/60 focus:border-primary h-11"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Subject *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. Tractor Inquiry"
                                  className="rounded-xl border-border/60 focus:border-primary h-11"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your requirements — machinery type, farm size, location, or any specific questions..."
                                rows={5}
                                className="rounded-xl border-border/60 focus:border-primary resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="flex-1 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 group"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="whatsapp"
                          size="lg"
                          className="flex-1 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                          asChild
                        >
                          <a href="https://wa.me/2348099933644" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-3">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Located in Kano, Nigeria — serving farmers and agribusinesses across all 36 states.
            </p>
            <Button
              variant="default"
              size="lg"
              className="mt-6 shadow-lg hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="https://maps.app.goo.gl/tkP6Bmp7WNF2BaVJ8" target="_blank" rel="noopener noreferrer">
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 h-96 lg:h-[480px]" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.524379395301645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1629800000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sankara Nigeria Location"
              aria-label="Map showing Sankara Nigeria Limited location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
