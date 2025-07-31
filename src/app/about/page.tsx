import { Metadata } from "next"
import Link from "next/link"
import { Calendar, MapPin, Award, Code, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the developer behind this blog. Passionate about web development, TypeScript, React, and sharing knowledge with the community.",
}

const skills = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: Zap,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools",
    icon: Users,
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  },
]

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Company",
    description: "Leading development of modern web applications using Next.js, TypeScript, and cloud technologies.",
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Startup Inc.",
    description: "Built scalable web applications and APIs, mentored junior developers, and contributed to architectural decisions.",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive websites and web applications using React, focusing on performance and user experience.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
          About Me
        </h1>
        <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-8 flex items-center justify-center">
          <Users className="h-16 w-16 text-muted-foreground" />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm a passionate full-stack developer with a love for creating modern, 
          performant web applications. I enjoy sharing knowledge and helping others 
          learn through writing and open-source contributions.
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
          My Journey
        </h2>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            My journey into web development began several years ago when I discovered 
            the power of creating interactive experiences on the web. What started as 
            curiosity quickly became a passion for building applications that solve 
            real-world problems.
          </p>
          <p>
            I specialize in modern web technologies, with a particular focus on React, 
            Next.js, and TypeScript. I believe in writing clean, maintainable code and 
            following best practices to create applications that are not only functional 
            but also scalable and performant.
          </p>
          <p>
            When I'm not coding, you can find me writing blog posts, contributing to 
            open-source projects, or exploring new technologies. I'm always eager to 
            learn and share knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
          Skills & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skillGroup.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary last:border-l-0"
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-3">{item.company}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
          What I Believe In
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">
              Clean Code
            </h3>
            <p className="text-sm text-muted-foreground">
              Writing code that is readable, maintainable, and follows best practices. 
              Code should tell a story and be easy for others to understand.
            </p>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">
              Community
            </h3>
            <p className="text-sm text-muted-foreground">
              Sharing knowledge and helping others grow. The developer community 
              is strongest when we support and learn from each other.
            </p>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">
              Performance
            </h3>
            <p className="text-sm text-muted-foreground">
              Building applications that are fast, accessible, and provide 
              excellent user experiences across all devices and connections.
            </p>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">
              Continuous Learning
            </h3>
            <p className="text-sm text-muted-foreground">
              Technology evolves rapidly, and staying curious and open to learning 
              new things is essential for growth as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always interested in connecting with fellow developers, discussing 
          new projects, or just having a chat about technology. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Read My Blog
          </Link>
        </div>
      </section>
    </div>
  )
}
