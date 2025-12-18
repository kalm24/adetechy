import { Globe, Target, TrendingUp, Search, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Custom websites tailored to your brand with mobile-responsive and user-friendly designs.",
      features: ["Custom Designs", "Mobile Responsive", "Fast Loading", "SEO Optimized"],
    },
    {
      icon: Target,
      title: "Sales Funnel Design",
      description: "Optimized funnels that boost conversions with lead capture and nurturing strategies.",
      features: ["Lead Generation", "A/B Testing", "High Conversions", "Automated Flows"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Social media advertising, email campaigns, and brand development that drives results.",
      features: ["Social Ads", "Email Marketing", "Brand Strategy", "Content Creation"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Keyword research, on-page optimization, and analytics to improve your visibility.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Services That <span className="text-primary">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning web designs to powerful marketing strategies, we offer comprehensive solutions to elevate your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
