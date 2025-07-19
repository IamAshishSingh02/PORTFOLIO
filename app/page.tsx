"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll animations
      gsap.utils.toArray(".fade-in").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div ref={mainRef} className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
