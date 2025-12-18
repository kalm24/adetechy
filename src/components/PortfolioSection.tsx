import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "SaaS Landing Page",
      category: "Sales Funnel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      title: "Lead Generation Funnel",
      category: "Sales Funnel",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            See Our Work <span className="text-primary">in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse through our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="w-full">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-4 text-foreground">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm text-foreground">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
