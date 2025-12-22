import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Let's Create Something <span className="text-primary">Amazing Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} />
                </div>
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Business Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your business name" value={formData.business} onChange={e => setFormData({
                ...formData,
                business: e.target.value
              })} />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Project Details</label>
                <textarea className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[150px] resize-none" placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-lg">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Email</div>
                  <a href="mailto:info@adetechy.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@adetechy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Phone</div>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +2348140776521
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Location</div>
                  <span className="text-muted-foreground">Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">Partnering with Top Marketing Tools & Website Builders</p>
              <div className="flex flex-wrap gap-4">
                {["WordPress", "Webflow", "Shopify", "HubSpot"].map(tool => <span key={tool} className="px-4 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground">
                    {tool}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;