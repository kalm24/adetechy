import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_20%/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_20%/0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Web Design & Digital Marketing Expert</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Crafting Stunning</span>
            <br />
            <span className="text-foreground">Websites That </span>
            <span className="text-primary">Drive Results</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transforming Ideas Into Exceptional Digital Experiences That Boost Engagement and Drive Growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Get a Free Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-sm mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">100%</div>
              <div className="text-muted-foreground text-sm mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">5+</div>
              <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
