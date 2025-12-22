import founderPhoto from "@/assets/founder-photo.png";

const FounderSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Founder</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Meet the Visionary Behind <span className="text-primary">Adetechy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Adetechy is a passionate web designer and digital strategist dedicated to transforming ideas into impactful online experiences. With a deep understanding of web design, sales funnels, digital marketing, and SEO, Adetechy has helped countless businesses elevate their digital presence and achieve remarkable growth.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Driven by creativity and innovation, Adetechy believes in building solutions that are not only visually stunning but also highly functional and results-driven. From small startups to established brands, Adetechy's mission is to empower businesses to thrive in today's competitive digital landscape.
            </p>

            {/* Quote */}
            <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
              <p className="text-foreground italic text-lg">
                "My mission is to empower businesses to thrive in the digital landscape through innovative design and strategic marketing."
              </p>
              <p className="text-primary font-semibold mt-4">— Adetechy</p>
            </div>
          </div>

          {/* Visual Side - Founder Photo */}
          <div className="relative">
            {/* Main Photo Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 group">
              {/* Photo */}
              <img 
                src={founderPhoto} 
                alt="Adetechy - Founder & Creative Director" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Name Card at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-foreground">Adetechy</h3>
                <p className="text-primary font-medium mt-1">Founder & Creative Director</p>
              </div>
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-4 w-20 h-20 bg-primary/25 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
