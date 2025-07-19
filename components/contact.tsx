"use client"
import emailjs from "emailjs-com"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  emailjs
    .send(
      "service_c0rnlrq",           // Your Service ID
      "template_okfncef",          // Your Template ID
      formData,                    // The data from the form
      "IkU4Szy4uJqjRPP3G"          // Your Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text)
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" }) // reset form
      },
      (error) => {
        console.error("Email error:", error.text)
        alert("Something went wrong. Please try again later.")
      }
    )
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "psssasds212004@gmail.com",
      href: "mailto:psssasds212004@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "9509149503",
      href: "tel:+919509149503",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      href: "https://www.google.com/maps/place/Army+Institute+of+Technology/@18.6069315,73.8725116,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c70090000001:0x160a20f3d0273495!8m2!3d18.6069264!4d73.8750865!16zL20vMGMxODE0?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden fade-in">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/30 dark:from-gray-800/80 dark:via-gray-900 dark:to-blue-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      </div>

      {/* Connection Lines Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
      />

      {/* Floating Communication Icons */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target="_blank" // ✅ opens in new tab
                  rel="noopener noreferrer" // ✅ prevents security vulnerabilities
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                >

                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                    {React.createElement(info.icon, { className: "h-6 w-6 text-gray-700 dark:text-gray-300" })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
