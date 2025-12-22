import { CheckCircle } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.png";

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
          <div className="relative group">
            {/* Main Photo Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50">
              {/* Photo */}
              <img 
                src={aboutPhoto} 
                alt="Adetechy workspace - Professional web design studio" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -left-4 w-20 h-20 bg-primary/25 rounded-full blur-2xl" />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-glow z-10">
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
