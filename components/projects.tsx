"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Social Marketplace Platform",
    year: 2025,
    type: "Company Project",
    visibility: "Confidential",
    description:
      "A full-stack social commerce app enabling posting, liking, commenting, user following, and real-time chatting with WebSockets. Built with MERN stack, Redux Toolkit, and Firebase Auth.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["MERN", "Redux", "WebSockets", "Firebase Auth", "Cloudinary"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    year: 2024,
    type: "Team",
    visibility: "Public",
    description:
      "A scalable multi-vendor e-commerce platform with secure checkout using Stripe, role-based access, AI-powered recommendations, and real-time stock updates.",
    image: "/project images/e_commerce.jpeg?height=300&width=500",
    technologies: ["React", "Node", "MongoDB", "Stripe", "Tailwind CSS", "Firebase Auth"],
    github: "#",
    live: "#",
  },
  {
    title: "Hospital Management System",
    year: 2024,
    type: "Team",
    visibility: "Public",
    description:
      "A file-based system to manage hospital operations efficiently. Includes modules for patients, appointments, and ambulances. Built in C++ using OOP principles for modularity. Ensures quick offline data access with file storage. ",
    image: "/project images/hms.jpg?height=300&width=500",
    technologies: ["C++", "OOP", "File System"],
    github: "#",
    live: "#",
  },
]



export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden fade-in">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      project.visibility === "Confidential"
                        ? "/project images/confidential.jpg"
                        : project.image || "/placeholder.svg"
                    }
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>

                  {/* 🔽 Add this block */}
                  <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="p-0.5 rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <span>{project.type}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        project.visibility === "Confidential"
                          ? "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100"
                          : "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100"
                      }`}
                    >
                      {project.visibility}
                    </Badge>
                  </div>
                  {/* 🔼 Add this block */}

                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow justify-between mt-auto">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.visibility !== "Confidential" && (
                    <div className="flex space-x-3 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
