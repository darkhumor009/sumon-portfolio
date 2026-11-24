"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Check,
  ChevronRight,
  Code2,
  Mail,
  Menu,
  Moon,
  MousePointer2,
  Ruler,
  Send,
  Sun,
  X,
} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Web", "web"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
];

const skillCategories = [
  {
    id: "engineering",
    label: "Engineering",
    number: "01",
    accent: "#C5FF4A",
    skills: ["AutoCAD 2D Drafting", "AutoCAD 3D Modeling", "Architectural Drafting", "Technical Drawing", "Building Estimating", "Construction Quantity Estimation", "Surveying-related Technical Work"],
  },
  {
    id: "web",
    label: "Web Development",
    number: "02",
    accent: "#A78BFA",
    skills: ["Website Development", "Frontend Development", "HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind CSS", "Responsive Web Design", "Website Deployment"],
  },
  {
    id: "app",
    label: "App Development",
    number: "03",
    accent: "#63DDFC",
    skills: ["Telegram Mini App Development", "Telegram Web Apps", "Interactive Web Applications", "Web-Based Tools", "UI Implementation"],
  },
  {
    id: "ai",
    label: "AI & Prompt Engineering",
    number: "04",
    accent: "#FF9671",
    skills: ["Prompt Engineering", "AI-Assisted Development", "AI Workflow Optimization", "AI Tools Utilization", "Creative Problem Solving"],
  },
  {
    id: "content",
    label: "Content & Writing",
    number: "05",
    accent: "#FFC857",
    skills: ["Blog Writing", "SEO-Friendly Content Writing", "Website Content Management", "Article Formatting", "Digital Publishing"],
  },
  {
    id: "office",
    label: "Office Productivity",
    number: "06",
    accent: "#F38BA8",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Professional Documentation", "Data Entry", "Spreadsheet Management", "Digital Office Work"],
  },
  {
    id: "management",
    label: "Website Management",
    number: "07",
    accent: "#70E1A1",
    skills: ["Website Maintenance", "Website Content Updates", "Website Administration", "Basic SEO Management", "Website Performance Monitoring", "Deployment Management"],
  },
];

const projects = [
  { title: "Age Calculator BD", category: "Web Development" },
  { title: "Earning Hero BD", category: "Web Development" },
  { title: "Educational Platform", category: "Web Development" },
  { title: "Telegram Mini Apps", category: "Telegram Apps" },
  { title: "Web-Based Tools", category: "Web Development" },
  { title: "AutoCAD Drafting Projects", category: "Engineering" },
  { title: "Building Estimation Projects", category: "Engineering" },
];

const services = [
  ["AutoCAD 2D Drafting", "Precise 2D technical and architectural drawings."],
  ["AutoCAD 3D Modeling", "Clear visual models for design presentation and planning."],
  ["Building Estimating", "Organized quantity and cost estimation workflows."],
  ["Website Development", "Responsive, maintainable websites and web interfaces."],
  ["Telegram Mini App Development", "Interactive Telegram Web App experiences."],
  ["Blog & Content Writing", "Structured articles and SEO-friendly website content."],
  ["Website Management", "Content updates, maintenance, and performance support."],
  ["Office Documentation", "Professional Word, Excel, and PowerPoint deliverables."],
  ["AI Prompt Engineering", "Clear prompts and practical AI-assisted workflows."],
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{eyebrow}</span></p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [activeSkill, setActiveSkill] = useState(skillCategories[0]);
  const [projectFilter, setProjectFilter] = useState("All Projects");
  const [formStatus, setFormStatus] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProjects = useMemo(
    () => projectFilter === "All Projects" ? projects : projects.filter((project) => project.category === projectFilter),
    [projectFilter]
  );

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const subject = String(formData.get("subject"));
    const body = [
      `Name: ${String(formData.get("name"))}`,
      `Email: ${String(formData.get("email"))}`,
      "",
      String(formData.get("message")),
    ].join("\n");
    window.location.href = `mailto:sumon.tuhin00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Your email app should open with the message. The form has not been sent until you send it there.");
  };

  return (
    <MotionConfig reducedMotion="user">
    <main className={light ? "site light" : "site"}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="navbar">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brand-mark">M</span>
          <span>MD.SUMON</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setLight((value) => !value)} aria-label="Toggle color theme">
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section className="hero" id="top">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="availability"><span /> Available for opportunities</p>
          <p className="hello">HELLO, I&apos;M</p>
          <h1><span>MD.</span>SUMON</h1>
          <h2>Engineering Ideas.<br /><em>Building Digital Experiences.</em></h2>
          <p className="hero-description">I work across engineering design, digital development, and creative technology. I enjoy transforming ideas into practical, functional, and visually engaging solutions.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View My Projects <ArrowDown size={17} /></a>
            <a className="button secondary" href="#contact">Let&apos;s Connect <ArrowRight size={17} /></a>
          </div>
        </motion.div>
        <a className="scroll-indicator" href="#about"><MousePointer2 size={15} /> Scroll to explore</a>
      </section>

      <section className="section about" id="about">
        <SectionHeading eyebrow="01 / ABOUT" title="DON'T YOU KNOW ME?." />
        <div className="about-grid">
          <motion.div className="about-photo" whileHover={{ y: -6 }}>
            <div className="portrait portrait-small">
              <Image src="/images/sumon.jpeg" alt="MD.SUMON" fill sizes="(max-width: 780px) 220px, 300px" />
            </div>
            <div className="photo-index">01 — 2026</div>
          </motion.div>
          <div className="about-copy">
            <p className="lead">Creative Digital Professional Passionate About Web Development, Surveying, Design, Technology, and Building Innovative Digital Solutions..</p>
            <p> I’m MD. SUMON, a passionate and versatile digital professional with experience in web development, AutoCAD drafting, 3D modeling, building estimation, and Telegram Mini App development. I enjoy exploring new technologies, solving problems, and transforming creative ideas into practical solutions. My goal is to continuously improve my skills and create meaningful digital experiences...</p>
            <div className="approach-grid">
              <div><span>01</span><h3>Think clearly</h3><p>Break complexity into understandable, actionable systems.</p></div>
              <div><span>02</span><h3>Build carefully</h3><p>Pay attention to structure, usability, and visual detail.</p></div>
              <div><span>03</span><h3>Keep learning</h3><p>Explore better tools and turn new knowledge into useful work.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise" id="expertise">
        <SectionHeading eyebrow="02 / EXPERTISE" title="Skills, mapped." copy="An interactive overview of the disciplines I work across." />
        <div className="skills-layout">
          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={activeSkill.id === category.id ? "skill-tab active" : "skill-tab"}
                onClick={() => setActiveSkill(category)}
                role="tab"
                aria-selected={activeSkill.id === category.id}
                style={{ "--skill-accent": category.accent } as React.CSSProperties}
              >
                <span>{category.number}</span>{category.label}<ChevronRight size={16} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div className="skill-display" key={activeSkill.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <div className="orbit" style={{ "--skill-accent": activeSkill.accent } as React.CSSProperties}>
                <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
                <div className="orbit-core"><span>{activeSkill.number}</span></div>
                {activeSkill.skills.slice(0, 6).map((skill, index) => (
                  <span className={`orbit-node node-${index + 1}`} key={skill}>{skill}</span>
                ))}
              </div>
              <div className="skill-list">
                <p className="mini-label">{activeSkill.number} / {activeSkill.label}</p>
                <div>{activeSkill.skills.map((skill) => <span key={skill}><Check size={13} /> {skill}</span>)}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section web-section" id="web">
        <SectionHeading eyebrow="03 / WEB DEVELOPMENT" title="Building For The Web." copy="Responsive interfaces, practical tools, and maintainable digital experiences." />
        <div className="web-showcase">
          <div className="web-details">
            {["Responsive website development", "Modern frontend development", "Landing page creation", "Web-based tools", "Interactive applications", "Website deployment"].map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><span>0{index + 1}</span><p>{item}</p><ArrowRight size={16} /></motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section telegram">
        <SectionHeading eyebrow="04 / TELEGRAM" title="Apps inside the conversation." copy="Telegram Web Apps and mini app interfaces designed around fast, intuitive interaction." />
        <div className="phone-layout">
          <div className="phone-copy">
            <p className="lead">A compact experience, built for a connected platform.</p>
            <ul><li><Check size={15} /> Telegram Web Apps</li><li><Check size={15} /> Interactive mini apps</li><li><Check size={15} /> Responsive app interfaces</li><li><Check size={15} /> Web-based concepts</li></ul>
          </div>
          <div className="phone">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="miniapp-header"><span>MS</span><p>Mini App<small>Interactive preview</small></p></div>
              <div className="miniapp-chart"><div /><div /><div /><div /><div /></div>
              <p className="miniapp-label">TODAY&apos;S OVERVIEW</p>
              <div className="miniapp-grid"><span>Tools</span><span>Forms</span><span>Data</span><span>More</span></div>
            </div>
          </div>
          <div className="telegram-mark"><span>TELEGRAM</span><strong>+</strong></div>
        </div>
      </section>

      <section className="section ai-section">
        <SectionHeading eyebrow="05 / AI WORKFLOW" title="Working Smarter With AI." />
        <div className="ai-workflow">
          {["IDEA", "PROMPT", "AI PROCESSING", "DEVELOPMENT", "FINAL OUTPUT"].map((step, index) => (
            <div className="workflow-node" key={step}>
              <motion.div whileHover={{ y: -8, rotate: index % 2 ? 2 : -2 }}><span>0{index + 1}</span><strong>{step}</strong></motion.div>
              {index < 4 && <ArrowRight className="workflow-arrow" size={20} />}
            </div>
          ))}
        </div>
        <div className="ai-skills">{["Prompt Engineering", "AI-Assisted Coding", "Workflow Optimization", "AI Tool Integration", "Creative AI Workflows"].map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section content-section">
        <SectionHeading eyebrow="06 / WORDS" title="Words That Communicate." />
        <div className="blog-grid">
          {[["01", "Building Better Digital Notes", "Article Writing"], ["02", "A Practical Guide to Clean Interfaces", "Blog Content"], ["03", "Writing for Search and People", "SEO-Friendly Writing"]].map(([number, title, tag]) => (
            <article className="blog-card" key={title}>
              <div className="blog-image"><span>{number}</span><div /></div>
              <p>{tag}</p><h3>{title}</h3><a href="#contact">Read concept <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section productivity">
        <SectionHeading eyebrow="07 / PRODUCTIVITY" title="Documents, structured." copy="Clear documentation and organized information for professional use." />
        <div className="office-grid">
          <article className="document-card">
            <div className="word-paper"><div /><div /><div /><div /><span>REPORT</span></div>
            <h3>Microsoft Word</h3><p>Professional documentation and formatting</p>
          </article>
          <article className="document-card">
            <div className="excel-sheet">{Array.from({ length: 30 }).map((_, i) => <i key={i} />)}</div>
            <h3>Microsoft Excel</h3><p>Data entry, estimation, and spreadsheet management</p>
          </article>
          <article className="document-card">
            <div className="slides"><span /><span /><span /></div>
            <h3>Microsoft PowerPoint</h3><p>Structured presentation and visual communication</p>
          </article>
        </div>
      </section>

      <section className="section management">
        <SectionHeading eyebrow="08 / MANAGEMENT" title="A complete digital lifecycle." />
        <div className="lifecycle">
          {["PLAN", "BUILD", "DEPLOY", "MANAGE", "OPTIMIZE"].map((step, index) => (
            <div key={step}><span>{index + 1}</span><strong>{step}</strong>{index < 4 && <ArrowRight size={18} />}</div>
          ))}
        </div>
        <div className="management-tags"><span>Maintenance</span><span>Content Updates</span><span>Administration</span><span>SEO Basics</span><span>Performance</span><span>Deployment</span></div>
      </section>

      <section className="section projects" id="projects">
        <SectionHeading eyebrow="09 / PORTFOLIO" title="Selected explorations." copy="Editable placeholder projects ready for real images, links, and case studies." />
        <div className="filter-row">
          {["All Projects", "Engineering", "Web Development", "Telegram Apps", "AI & Automation", "Content & Digital Work"].map((filter) => (
            <button key={filter} className={projectFilter === filter ? "active" : ""} onClick={() => setProjectFilter(filter)}>{filter}</button>
          ))}
        </div>
        <motion.div className="project-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article className="project-card" key={project.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
                <div className={`project-image project-${(index % 4) + 1}`}><span>MS / 0{index + 1}</span><div className="project-symbol">{project.category === "Engineering" ? <Ruler /> : <Code2 />}</div></div>
                <div className="project-info"><p>{project.category}</p><h3>{project.title}</h3><p className="project-description">Project details, technologies, and links will be added here.</p><div className="project-links"><span>Demo not added</span><span>Source not added</span></div></div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && <p className="empty-projects" role="status">No projects in this category yet.</p>}
      </section>

      <section className="section toolkit">
        <SectionHeading eyebrow="10 / TOOLKIT" title="The instruments I use." />
        <div className="tool-grid">
          {["VS Code", "GitHub", "AutoCAD", "Next.js", "Tailwind CSS", "Microsoft Office", "AI Tools", "Telegram Tools"].map((tool, index) => (
            <motion.div key={tool} whileHover={{ y: -8 }}><span>0{index + 1}</span><div className="tool-icon">{tool.slice(0, 2).toUpperCase()}</div><h3>{tool}</h3></motion.div>
          ))}
        </div>
      </section>

      <section className="section journey">
        <SectionHeading eyebrow="11 / JOURNEY" title="Always in motion." copy="A learning timeline that grows alongside the work." />
        <div className="timeline">
          {[
            ["Learning", "Foundations", "Technical skills, digital tools, and creative problem solving."],
            ["Building", "Practice", "Developing projects across engineering and web technology."],
            ["Expanding", "Growth", "Combining drafting, development, AI, and content workflows."],
            ["Creating", "Future", "Open milestones can be added as your journey develops."],
          ].map(([phase, title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><div><p>{phase}</p><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <SectionHeading eyebrow="12 / SERVICES" title="What we can build." />
        <div className="service-grid">
          {services.map(([title, copy], index) => (
            <motion.article key={title} whileHover={{ y: -8 }}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><a href="#contact">Discuss project <ArrowRight size={16} /></a></motion.article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow"><span>13 / CONTACT</span></p>
          <h2>Have an Idea?<br /><em>Let&apos;s Build Something Great.</em></h2>
          <p>Tell me what you&apos;re planning, designing, or trying to improve.</p>
          <a href="mailto:sumon.tuhin00@gmail.com"><Mail size={17} /> sumon.tuhin00@gmail.com</a>
        </div>
        <form className="contact-form" onSubmit={submitForm}>
          <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label className="full">Subject<input name="subject" type="text" required placeholder="Project subject" /></label>
          <label className="full">Message<textarea name="message" required rows={5} placeholder="Tell me about your project..." /></label>
          <button className="button primary" type="submit">Send Message <Send size={16} /></button>
          {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        </form>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">M</span><span>MD.SUMON</span></a>
        <p>DESIGN. DEVELOP. CREATE. INNOVATE.</p>
        <div className="footer-links">
          <a href="#top">Navigation</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          <div className="social-links" aria-label="Social media links">
            <a href="https://www.facebook.com/share/1JHNYhz1F3/" aria-label="Facebook" title="Facebook" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/qr/LYEXISNODFCUO1" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@your_tuhin0007?_r=1&_t=ZS-9BfvXChx7n3" aria-label="TikTok" title="TikTok" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://www.instagram.com/tuhin_ixr?cnvx=MWdqMW9iamRlaG1oYQ==" aria-label="Instagram" title="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com/darkhumor009?tab=repositories" aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube" title="YouTube" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <a className="back-top" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
        <p className="copyright">© 2026 MD.SUMON. All rights reserved.</p>
      </footer>
    </main>
    </MotionConfig>
  );
}
