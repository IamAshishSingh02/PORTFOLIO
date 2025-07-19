"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-social",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

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
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 rounded-full text-sm font-medium">
                💻 Software Engineer
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Building digital
              <br />
              <span className="text-gray-600 dark:text-gray-400">experiences that</span>
              <br />
              matter
            </h1>

            <p className="hero-subtitle text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-left">
              👋Hey, I’m <span className="font-semibold text-gray-900 dark:text-white">Ashish Kumar</span>!
              <br />
              I’m a <span className="font-semibold text-blue-600 dark:text-blue-600"> 3rd year CS </span>student at 
              <span className="font-semibold text-green-600 dark:text-green-600"> Army Institute of Technology, Pune </span>- usually found either playing chess, watching cricket, or doing god knows what.
              <br /><br />
              I love <span className="font-semibold text-yellow-600 dark:text-yellow-600"> solving problems </span>- whether it’s through quick scripts, personal projects, or sleepless nights where sleep is rare and bugs are guaranteed.
              <br /><br />
              This site is a glimpse into my journey so far — the things I’ve <span className="font-semibold text-purple-600 dark:text-purple-600">built</span>, broken, fixed, and learned from. 
              Some of them worked surprisingly well, others? Not so much. But every mistake came with a lesson , and every line of code brought me one step closer.
              And hey, I’m just <span className="italic font-semibold text-pink-600 dark:text-pink-600"> getting started. </span>
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="/resume/My_Resume.pdf"
                download
                className="inline-block"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="hero-social flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: "https://github.com/IamAshishSingh02", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-kumar-936607286", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email", scroll: true },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    if (social.scroll) {
                      e.preventDefault()
                      const section = document.querySelector(social.href)
                      section?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  target={!social.scroll ? "_blank" : undefined}
                  rel={!social.scroll ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div className="hero-image relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-xl"></div>

                {/* Profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                  <Image src="/images/profile-art.png" alt="Ashish Kumar" fill className="object-cover" priority />
                </div>

                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-6 w-5 h-5 bg-green-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
