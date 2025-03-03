import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const technicalSkills = {
    Languages: ["Python", "Java", "JavaScript", "C", "C++", "SQL", "Assembly", "HTML", "CSS", "LaTeX", "Kotlin", "MATLAB", "ACL2s"],
    Frameworks: ["Flask", "Django", "NumPy", "pandas", "Streamlit", "Swing", "MySQL", "SQLite", "Tailwind", "pthreads", "OpenMP", "CUDA"],
    Technologies: ["AWS", "Pinecone", "Linux", "Slurm", "Docker", "Postman", "Conda", "npm", "Git", "Homebrew", "Jupyter", "JetBrains"],
  }

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">temp
            I'm a passionate software engineer with expertise in building modern applications, algorithms, models, and more. With a strong
            foundation in both frontend, backend, database, parallel computing technologies, I create scalable and maintainable solutions that
            solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Me?</h3>
              <p className="text-muted-foreground mb-4">
              💻 As a Sophomore at Northeastern University, studying Computer Science, I’m eager to embark on a rigorous academic journey to deepen my knowledge in Computer Science, Machine Learning, Mathematics, and related disciplines.
              </p>
              <p className="text-muted-foreground mb-4">
              🚀 I enjoy exploring new things occasionally, while always striving to connect all my passions and interests. Being born and raised in a family of engineers, it's a given that computer would interest me more than anything else. On top of that, my parents' transition into the business world also gave me another perspective of perceiving the world. It gave birth to the light of incorporating technological capabilities into a meaningful, worthwhile, impactful, long lasting, and fulfilling business of my own one day in the near future.
              </p>
              <p className="text-muted-foreground mb-4">
              🌎 The most important lesson I’ve learned? Never stagnate! Always eager to try, fail, and learn new things! Whether technical, intellectual or physical, who doesn’t enjoy a bit of travel? :)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

