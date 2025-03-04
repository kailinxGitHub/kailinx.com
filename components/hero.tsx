import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Kailin Xing</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Software Engineer
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            I learn, I experiment, I build. Passionate about creating meaningful products and solutions to complex problems.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-2">
            <Link href="https://github.com/kailinxGitHub" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kailinx" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kailinxgoogl@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image 
              src="/pfp.jpeg" 
              alt="Kailin Xing" 
              fill 
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 256px, 320px"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

