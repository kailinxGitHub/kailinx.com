import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer/Research Assistant",
      company: "Northeastern University College of Engineering ECE Department",
      period: "May 2024 - Present",
      description:
        "Optimized image processing performance by implementing C- and CUDA-based acceleration with pthreads and OpenMP tiling, reducing execution time by 2x on large-scale images on a Linux(Unix) system. Integrated and enhanced 5+ edge detection operators (Sobel, Prewitt, Roberts, etc.) using OpenCV and CUDA, achieving real-time GPU-accelerated processing.",
      technologies: ["C/C++", "OpenMP", "OpenCV", "pthreads", "CUDA", "Linux"],
    },
    {
      id: 2,
      role: "Software Engineer/Research Assistant",
      company: "Northeastern University Lokey School of Business and Social Sciences",
      period: "Jun 2024 - Feb 2025",
      description:
        "Collected and cleaned media coverage data on lower court decisions, spearheading data assembly with Selenium, Pandas, and NLTK to maintain research quality. Developed a high-volume scraping pipeline to retrieve over 350K articles from ProQuest, automating logins with Selenium and storing results with Pandas for data analysis.",
      technologies: ["Python", "Selenium", "Pandas", "Scrapy", "Beautiful Soup", "NLTK"],
    }
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
      institution: "Northeastern University, Khoury College of Computer Sciences",
      period: "Sep 2023 – May 2027",
      description: [
        "GPA: 3.6/4.0",
        "Relevant Coursework: Algorithms and Data Structures, Object-Oriented Design (Java), Computer Systems (C, Assembly), Database Design (SQL), Logic and Computation (ACL2), Fundamentals of Computer Science (Kotlin)",
        "Competitions: Harvard Undergraduate Trading Competition 5th Place Podium & News-Based Trading 3rd Place",
        "Activities: Electric Racing, IEEE Student Branch, AI Club, Undergraduate Research Club"
      ],
      location: "Boston, MA"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground space-y-4">
                      {edu.description.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

