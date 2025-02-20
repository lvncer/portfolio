"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, ChartNoAxesColumn } from "lucide-react";

const links = [
  {
    title: "GitHub",
    description: "Check out my open source projects and contributions",
    icon: Github,
    url: "https://github.com/lvncer",
  },
  {
    title: "Zenn",
    description: "Read my articles on web development and programming",
    icon: ChartNoAxesColumn,
    url: "https://zenn.dev/tkszenn",
  },
  {
    title: "Email",
    description: "Get in touch with me directly",
    icon: Mail,
    url: "negimasa58@gmail.com",
  },
];

export default function Links() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Connect With Me</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <link.icon className="h-6 w-6" />
                      <div>
                        <CardTitle>{link.title}</CardTitle>
                        <CardDescription>{link.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit {link.title}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
