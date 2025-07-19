"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects from conception to deployment. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Developed responsive web applications and landing pages for various clients. Optimized performance and implemented modern web standards.",
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden fade-in">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100/50 to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,107,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
      />

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg rotate-45 blur-sm"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            My professional journey and the experiences that have shaped my development career.
          </motion.p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-700 mb-2">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
