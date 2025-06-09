"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    id: "siw-lt-1",
    title: "SIW LT会 第一回",
    date: "2025/05/30",
    location: "さいたまIT・WEB専門学校",
    organizer: "SIW LT委員会",
    role: "LT登壇",
    category: "学校イベント",
    status: "完了",
    description:
      "Next.jsとAIを使用したWebアプリケーションの開発についてLTを行いました。",
    technologies: ["Next.js", "AI"],
    attendees: "約10名",
    url: "https://siw-lt.vercel.app/talk/4",
  },
];

const getEventCategoryColor = (category: string) => {
  switch (category) {
    case "学校イベント":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "技術発表":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "競技":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    case "コミュニティ":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getEventStatusColor = (status: string) => {
  switch (status) {
    case "開催予定":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    case "完了":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "優勝":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "参加":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function Events() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <section>
            <h1 className="text-4xl font-bold mb-4">イベント・活動</h1>
            <p className="text-muted-foreground mb-8">
              学内外でのイベント参加や技術発表を通じて、コミュニティとの繋がりを深め、知識の共有と学習を続けています。
            </p>
            <div className="grid gap-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-200">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge className={getEventStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge
                          className={getEventCategoryColor(event.category)}
                        >
                          {event.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="w-4 h-4 mr-2" />
                          主催: {event.organizer}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          会場: {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          参加者: {event.attendees} | 役割: {event.role}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {event.url && (
                        <div className="pt-2">
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={event.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              詳細を見る
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
