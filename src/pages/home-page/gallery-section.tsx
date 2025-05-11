"use client"

import { useState } from "react"
import p1 from "@/assets/images/projects/p1.jpg"
import p2 from "@/assets/images/projects/p2.jpg"
import p3 from "@/assets/images/projects/p3_2.jpg"
import p4 from "@/assets/images/projects/p4.jpg"
import p5 from "@/assets/images/projects/p5.jpg"
// import p6 from "@/assets/images/projects/p6.jpg"
import p8 from "@/assets/images/projects/p8.png"
import p9 from "@/assets/images/projects/p9.png"
import p10 from "@/assets/images/projects/p10_2.jpg"
import p11 from "@/assets/images/projects/p11.jpg"
import p12 from "@/assets/images/projects/p12_2.jpg"
import p13 from "@/assets/images/projects/p13_2.jpg"
import p6_2 from "@/assets/images/projects/p6_2.jpg"
import p14 from "@/assets/images/projects/p14.jpg"
import p15 from "@/assets/images/projects/p15_2.jpg"

import { ImageGallery, type ImageItem } from "@/components/gallery/gallery"
import { Wrapper } from "@/components/ui/wrapper"
import { useFadeInAnimation } from "@/hooks/use-fadein-animation"
import { Button } from "@/components/ui/button"

const galleryData: ImageItem[] = [
  {
    id: "1",
    src: p1,
    alt: "Mountain landscape",
    title: "Al Qassim National Hospital",
    description: "",
  },
  {
    id: "2",
    src: p2,
    alt: "Modern architecture",
    title: "Saudi German Hospital",
    description: "",
  },
  {
    id: "3",
    src: p3,
    alt: "Waterfall",
    title: "Kingdom Hospital",
    description: "",
  },
  {
    id: "4",
    src: p4,
    alt: "Mountain sunset",
    title: "King Fahad Specialist Hospital - Dammam",
    description: "",
  },
  {
    id: "5",
    src: p5,
    alt: "Urban night",
    title: "Saudi Aramco Lab R & D",
    description: "",
  },
  {
    id: "6",
    src: p6_2,
    alt: "Nature landscape",
    title: "Kingdom Tower",
    description: "",
  },
  {
    id: "7",
    src: p9,
    alt: "Nature landscape",
    title: "King Fahad Airbase - Taif",
    description: "",
  },
  {
    id: "13",
    src: p13,
    alt: "Nature landscape",
    title: "Granada Center - Riyadh",
    description: "",
  },
  {
    id: "8",
    src: p8,
    alt: "Nature landscape",
    title: "Faisaliya Tower",
    description: "",
  },
  {
    id: "9",
    src: p12,
    alt: "Nature landscape",
    title: "SABIC HQ Riyadh",
    description: "",
  },
  {
    id: "10",
    src: p10,
    alt: "Nature landscape",
    title: "Al Rashid Tower - Al Khobar",
    description: "",
  },
  {
    id: "11",
    src: p11,
    alt: "Nature landscape",
    title: "MOI HQ Riyadh",
    description: "",
  },
  {
    id: "14",
    src: p14,
    alt: "Nature landscape",
    title: "Communication & IoT at Airbase - Khobar",
    description: "",
  },
  {
    id: "15",
    src: p15,
    alt: "Nature landscape",
    title: "VMS Traffic System - Olaya Riyadh",
    description: "",
  },
]

export function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(false)
  const sectionRef = useFadeInAnimation({
    animationClass: "animate-fadeInLeft",
    threshold: 0.25,
  })

  const reversedGalleryData = [...galleryData].reverse()
  const visibleImages = reversedGalleryData.slice(0, visibleCount)
  const hasMoreImages = visibleCount < galleryData.length

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, galleryData.length))
      setLoading(false)
    }, 500) // Simulate a delay for loading
  }

  return (
    <section className="py-20" ref={sectionRef} data-animatable>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">Our Projects</h2>
          <ImageGallery imageItems={visibleImages} />

          {hasMoreImages && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-sm"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}
