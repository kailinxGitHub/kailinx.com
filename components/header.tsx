"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Kailin</span>Xing
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="hidden md:flex">
              Resume
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl h-[80vh]">
            <DialogHeader>
              <DialogTitle>Resume</DialogTitle>
            </DialogHeader>
            <div className="flex-1 w-full h-full">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                style={{ minHeight: "calc(80vh - 80px)" }}
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-2">
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh]">
                <DialogHeader>
                  <DialogTitle>Resume</DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full h-full">
                  <iframe
                    src="/resume.pdf"
                    className="w-full h-full"
                    style={{ minHeight: "calc(80vh - 80px)" }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      )}
    </header>
  )
}

