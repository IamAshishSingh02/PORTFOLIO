"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Cloud, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: ["NodeJS", "ExpressJS", "FastAPI", "REST APIs"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Programming Languages",
    icon: Smartphone,
    skills: ["C++", "HTML5", "CSS3", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Vercel", "Netlify"],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Git/GitHub", "VS Code", "Figma", "Postman", "Bash"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden fade-in">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 to-white dark:from-gray-800/80 dark:to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-16 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-16 right-1/4 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            The tools and technologies I use to bring ideas to life and create exceptional digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full w-fit">
                    <category.icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
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
