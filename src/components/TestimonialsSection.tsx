import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Adetechy transformed our online presence completely. Our website now converts visitors into customers like never before. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GreenLife Co.",
      content: "The sales funnel they created exceeded our expectations. We saw a 300% increase in leads within the first month. Incredible work!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Bloom Agency",
      content: "Professional, creative, and results-driven. Adetechy's SEO strategy put us on the first page of Google for our key terms.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">"{testimonial.content}"</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-heading font-bold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
