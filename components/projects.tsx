import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Edge Detectr",
      description:
        "A real-time edge detection application that processes video streams using computer vision algorithms. Built with parallel processing capabilities for optimal performance.",
      video: "https://github.com/user-attachments/assets/b0e6c67c-02af-4b8a-8063-8bb069e6db48",
      technologies: ["C++", "OpenMP", "Express.js", "Next.js", "CUDA", "AWS"],
      liveUrl: "https://www.edgedetectr.com/",
      githubUrl: "https://github.com/EdgeDetectr/EdgeDetectr-Meta",
    },
    {
      id: 2,
      title: "Spotify Content-Based Recommendation System",
      description:
        "A content-based recommendation system for Spotify that recommends songs based on their audio features.",
      video: "https://github.com/user-attachments/assets/81fc10a7-6f98-4ed4-a0d3-7b8e58d87ba5",
      technologies: ["Spotipy", "Plotly", "Pandas", "Python", "Streamlit"],
      liveUrl: "https://jjpoumvmydt6utgtfayjyk.streamlit.app/",
      githubUrl: "https://github.com/kailinxGitHub/Spotify-UnWrapped-Spotify-Content-Based-Recommendation-System-and-Data-Visualization/tree/main",
    },
    {
      id: 3,
      title: "AdvisorU",
      description:
        "An AI-powered academic advisor utilizing RAG and LLM technologies. Features include a chatbot for course guidance, visual academic planner, and comprehensive course search for Northeastern University students.",
      image: "/advisoru.png",
      technologies: ["Python", "Django", "Vue.js", "LangChain", "Pinecone", "AWS EC2", "MySQL", "TypeScript"],
      liveUrl: "https://advisoru.binrz.com",
      githubUrl: "https://github.com/AdvisorU",
    },
  ]

  return (
    <section id="projects" className="py-20 container">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        <p className="max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've
          mastered throughout my journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full group">
              {project.video ? (
                <>
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl w-[90vw] p-0">
                      <DialogHeader className="p-4">
                        <DialogTitle>{project.title} Demo</DialogTitle>
                      </DialogHeader>
                      <div className="w-full aspect-video">
                        <video
                          className="w-full h-full object-contain bg-black"
                          controls
                          autoPlay
                          loop
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative w-full h-full cursor-pointer group">
                        <Image 
                          src={project.image || "/placeholder.svg"} 
                          alt={project.title} 
                          fill 
                          className="object-cover"
                          priority
                          unoptimized
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-[90vw] p-0">
                      <DialogHeader className="p-4">
                        <DialogTitle>{project.title} Screenshot</DialogTitle>
                      </DialogHeader>
                      <div className="w-full max-h-[70vh] relative flex items-center justify-center bg-black/5">
                        <Image 
                          src={project.image || "/placeholder.svg"} 
                          alt={project.title}
                          width={1280}
                          height={720}
                          className="w-auto h-auto max-w-full max-h-[70vh]"
                          priority
                          unoptimized
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild size="sm" variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

