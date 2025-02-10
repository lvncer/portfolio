"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Code2, Sparkles, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing elegant, maintainable, and efficient code is my passion"
  },
  {
    icon: Sparkles,
    title: "Creative Solutions",
    description: "Turning complex problems into simple, beautiful solutions"
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimizing for the best possible user experience"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center"
          >
            <span className="text-4xl">👋</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Im a passionate developer focused on creating beautiful and functional web experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button asChild>
              <Link href="/about">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <Card className="relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer className="border-t border-border/40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Yamada Taro. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}