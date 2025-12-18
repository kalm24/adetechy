import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Custom Web Design Solutions",
    "Results-Driven Approach",
    "Cutting-Edge Technology",
    "End-to-End Support",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(1_98%_49%/0.05)_50%,transparent_75%)]" />
              <div className="absolute top-4 left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-heading font-bold text-primary/20 mb-4">A</div>
                  <div className="text-2xl font-heading font-bold text-foreground">Adetechy</div>
                  <div className="text-muted-foreground mt-2">Web Design Studio</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-glow">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Meet <span className="text-primary">Adetechy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a team of creative web design and digital marketing experts passionate about transforming your ideas into captivating digital experiences. With a focus on functionality and aesthetics, we specialize in delivering websites, sales funnels, and marketing strategies that convert.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Driven by creativity and innovation, we believe in building solutions that are not only visually stunning but also highly functional and results-driven.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
