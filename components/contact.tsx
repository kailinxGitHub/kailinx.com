import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 container">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        <p className="max-w-2xl text-muted-foreground">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <a href="mailto:kailinxgoogl@gmail.com" className="hover:text-primary transition-colors">
                kailinxgoogl@gmail.com
              </a>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <a href="tel:+16177777608" className="hover:text-primary transition-colors">
                +1 (617) 777-7608
              </a>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Boston, Massachusetts</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

