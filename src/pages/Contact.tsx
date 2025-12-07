import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";
import tractorZoomlion from "@/assets/tractor-zoomlion.jpg";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for immediate assistance",
    details: ["+234 809 993 3644", "+234 803 807 4309"],
    action: "tel:+2348099933644",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email anytime",
    details: ["sankaranigerialimited@gmail.com"],
    action: "mailto:sankaranigerialimited@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit us at our location",
    details: ["Kano, Nigeria"],
    action: null,
  },
];

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
    name: "",
    email: "",
    phone: "",
    message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });

    form.reset();
  };

  return (
    <Layout>
      {/* Hero Section - Enhanced with More Content */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={tractorZoomlion}
            alt="Agricultural machinery"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/85" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20 animate-pulse" />
        </div>

        {/* Centered Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32 max-w-7xl z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8 shadow-xl"
              data-aos="fade-down"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold">Get In Touch Today</span>
            </div>

            {/* Main Title */}
            <h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact Us
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We're here to answer your questions and support your agricultural journey. Reach out to our expert team for personalized assistance.
            </p>

            {/* Additional Content - Quick Contact Options */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Phone className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-primary-foreground text-sm font-medium mb-1">Call Us</p>
                <a 
                  href="tel:+2348099933644" 
                  className="text-primary-foreground/80 text-xs hover:text-accent transition-colors"
                >
                  +234 809 993 3644
                </a>
              </div>
              <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Mail className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-primary-foreground text-sm font-medium mb-1">Email Us</p>
                <a 
                  href="mailto:sankaranigerialimited@gmail.com" 
                  className="text-primary-foreground/80 text-xs hover:text-accent transition-colors break-all"
                >
                  sankaranigerialimited@gmail.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <MessageCircle className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-primary-foreground text-sm font-medium mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/2348099933644" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-xs hover:text-accent transition-colors"
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap justify-center gap-4 lg:gap-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <a href="tel:+2348099933644">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <a
                  href="https://wa.me/2348099933644"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <a href="#contact-form">
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {info.action ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors"
                              target={info.action.startsWith("http") ? "_blank" : undefined}
                              rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Card className="border-border/50 shadow-xl" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="name">Full Name *</FormLabel>
                          <FormControl>
                      <Input
                        id="name"
                        placeholder="Your name"
                              {...field}
                              aria-label="Full Name"
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
                          <FormLabel htmlFor="email">Email Address *</FormLabel>
                          <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                              {...field}
                              aria-label="Email Address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="phone">Phone Number</FormLabel>
                        <FormControl>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 xxx xxx xxxx"
                            {...field}
                            aria-label="Phone Number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="message">Message *</FormLabel>
                        <FormControl>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your enquiry..."
                      rows={5}
                            {...field}
                            aria-label="Message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {/* WhatsApp CTA Button */}
              <div className="mt-6">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/2348099933644"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 lg:h-[500px] bg-muted relative overflow-hidden">
        <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.524379395301645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1629800000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sankara Nigeria Location"
            className="w-full h-full"
            aria-label="Map showing Sankara Nigeria Limited location"
        />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
