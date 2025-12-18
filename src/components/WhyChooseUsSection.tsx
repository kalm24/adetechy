import { Award, Clock, Headphones, Lightbulb, Shield, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Expertise You Can Trust",
      description: "Years of experience in web design, digital marketing, and SEO.",
    },
    {
      icon: Lightbulb,
      title: "Tailored Solutions",
      description: "Custom strategies designed to meet your unique business needs.",
    },
    {
      icon: Zap,
      title: "Results-Driven Approach",
      description: "Focused on boosting your online presence and driving conversions.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "From concept to launch and beyond, we're with you every step.",
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "A portfolio of successful projects and happy clients to back us up.",
    },
    {
      icon: Clock,
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest tools and trends to keep you ahead.",
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Why We're the Perfect Partner for Your <span className="text-primary">Digital Success</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
