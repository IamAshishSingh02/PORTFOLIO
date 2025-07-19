"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/IamAshishSingh02", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-kumar-936607286", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ImAshish_02?t=HCrBkNHJEbL6ysfVIQcegA&s=09", label: "Twitter" },
    { icon: Mail, href: "#contact", label: "Email" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,107,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.2),transparent_70%)]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fillOpacity='0.2' fillRule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-full blur-2xl"></div>

      <div className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Driven By</h3>
              <div className="w-full flex justify-center px-4">
                <blockquote className="w-full max-w-xl -ml-12 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-l-4 border-pink-600 dark:border-green-600 pl-6 pr-4 py-4 italic rounded-md shadow-sm">
                  <p className="text-base md:text-lg leading-relaxed">
                    “Blood, Sweat & Respect. The first two you give, the last one you earn.”
                  </p>
                  <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right">
                    ~ Dwayne “The Rock” Johnson
                  </footer>
                </blockquote>
              </div>





            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("#") ? undefined : "_blank"}
                    rel={social.href.startsWith("#") ? undefined : "noopener noreferrer"}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">© {currentYear} Ashish Kumar. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ by Ashish Kumar</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
