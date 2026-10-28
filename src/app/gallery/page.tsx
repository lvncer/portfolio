"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { GALLERY_ITEMS } from "@/constants/gallery"

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold py-6">Gallery</h1>
          <p className="text-muted-foreground mb-8">
            これまでの活動の写真をまとめています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.date}
                </div>
                <p className="text-sm text-muted-foreground">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
