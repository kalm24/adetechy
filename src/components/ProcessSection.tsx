import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business goals, target audience, and vision. Through in-depth discussions and research, we uncover the essence of your brand to create a strong foundation for your project.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design",
      description: "Our team crafts visually stunning and user-friendly designs tailored to your brand. We focus on delivering a seamless user experience while maintaining a balance between creativity and functionality.",
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      description: "Turning designs into reality, we build robust, responsive, and optimized websites or sales funnels. Every line of code is crafted with precision to ensure smooth performance across all devices.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch & Support",
      description: "After thorough testing, we launch your project with confidence. Our support doesn't stop there—we provide ongoing maintenance and updates to keep your digital presence running flawlessly.",
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Our Proven Process for <span className="text-primary">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined approach that ensures exceptional results for every project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-border z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
