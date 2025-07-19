"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface AnimatedBackgroundProps {
  variant?: "dots" | "lines" | "particles" | "waves"
  className?: string
}

export default function AnimatedBackground({ variant = "dots", className = "" }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const elements: HTMLElement[] = []

    // Create animated elements based on variant
    for (let i = 0; i < 20; i++) {
      const element = document.createElement("div")

      if (variant === "dots") {
        element.className = "absolute w-2 h-2 bg-gray-300/30 rounded-full"
      } else if (variant === "particles") {
        element.className = "absolute w-1 h-1 bg-blue-400/40 rounded-full"
      }

      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`

      container.appendChild(element)
      elements.push(element)
    }

    // Animate elements
    elements.forEach((element, index) => {
      gsap.to(element, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      })

      gsap.to(element, {
        opacity: 0.1 + Math.random() * 0.5,
        duration: 2 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      })
    })

    return () => {
      elements.forEach((element) => element.remove())
    }
  }, [variant])

  return <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`} />
}
