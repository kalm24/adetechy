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

          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(1_98%_49%/0.15),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(1_98%_49%/0.1),transparent_60%)]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-glow-pulse">
                    <span className="text-5xl font-heading font-bold text-primary">A</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground">Adetechy</h3>
                  <p className="text-primary font-medium mt-2">Founder & Creative Director</p>
                  <p className="text-muted-foreground mt-4">Web Designer • Digital Strategist</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
