
import { motion } from "framer-motion";
import { Figma, Palette, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="px-4 py-2 rounded-full bg-secondary inline-block text-sm font-medium mb-6">
              UI/UX Designer
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hey, I'm Kapil Sonawane
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A passionate UI/UX designer focused on creating beautiful and functional
              digital experiences that delight users.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-12">
              As a fresh UI/UX designer, I bring a modern perspective to digital
              design. My focus is on creating intuitive and aesthetically pleasing
              interfaces that enhance user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-6">
                <Figma className="w-10 h-10 mb-4 mx-auto text-primary" />
                <h3 className="text-xl font-semibold mb-2">UI Design</h3>
                <p className="text-muted-foreground">
                  Creating beautiful and functional interfaces with Figma
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <Palette className="w-10 h-10 mb-4 mx-auto text-primary" />
                <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
                <p className="text-muted-foreground">
                  Crafting stunning visuals with Adobe Photoshop
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <Lightbulb className="w-10 h-10 mb-4 mx-auto text-primary" />
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-muted-foreground">
                  Bringing ideas to life with Adobe Illustrator
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-16">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="h-16 w-16 mx-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="mailto:contact@kapilsonawane.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Send me an email
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const tools = [
  {
    name: "Figma",
    description: "My primary tool for UI/UX design and prototyping",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe Photoshop",
    description: "For image editing and visual design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Adobe Illustrator",
    description: "Vector graphics and logo design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
];

export default Index;
