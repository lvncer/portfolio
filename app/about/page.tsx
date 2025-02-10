"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                    alt="Profile"
                    className="rounded-lg w-full object-cover aspect-square"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Hello! 👋</h2>
                  <p className="text-muted-foreground">
                    Im a passionate developer with a love for creating beautiful and functional web applications.
                    I specialize in modern web technologies and always strive to learn and grow in this ever-evolving field.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <p className="text-muted-foreground">
                      With several years of experience in web development, Ive worked on various projects
                      ranging from small business websites to large-scale applications.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interests</h3>
                    <p className="text-muted-foreground">
                      When Im not coding, you can find me exploring new technologies, contributing to open-source projects,
                      or sharing knowledge with the developer community.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}