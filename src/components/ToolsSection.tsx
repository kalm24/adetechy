const tools = [
  { name: "Systeme.io", logo: "https://cdn.worldvectorlogo.com/logos/systeme-io.svg" },
  { name: "GoHighLevel", logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn877STbK3LHmNX/media/64dc26e5ef6c6b45db094096.png" },
  { name: "Teachable", logo: "https://cdn.worldvectorlogo.com/logos/teachable-1.svg" },
  { name: "Thinkific", logo: "https://cdn.worldvectorlogo.com/logos/thinkific.svg" },
  { name: "ClickFunnels", logo: "https://cdn.worldvectorlogo.com/logos/clickfunnels-1.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
  { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
  { name: "Kartra", logo: "https://www.kartra.com/images/logos/kartra-logo-dark.svg" },
];

const ToolsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partnering with Top Marketing Tools & Website Builders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading platforms to deliver exceptional results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 w-full h-32"
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="h-10 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
              <span className="mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
