"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Event {
  title: string;
  date: string;
  time: string;
  category: string;
  organization: string;
  location: string;
  description: string;
  tags: string[];
  url?: string;
}

const events: Event[] = [
  {
    title: "Cursor Meetup Tokyo",
    date: "2025年6月6日",
    time: "19:00 - 22:00",
    category: "技術",
    organization: "Cursor Meetup Tokyo",
    location: "東京都港区六本木6-10-1 六本木ヒルズ森タワー18F",
    description:
      "企業単位で Cursor を導入したユーザ事例のLTとユーザによるLT、Cursorチームからの日本ユーザへの動画メッセージ紹介後、ユーザ同士の交流会を行う。",
    tags: ["AI", "Cursor"],
    url: "https://aiau.connpass.com/event/353531/",
  },
  {
    title: "SIW 第 1 回 LT",
    date: "2025年5月30日",
    time: "16:30 - 18:00",
    category: "技術",
    organization: "SIW LT 実行委員会",
    location: "さいたまIT・WEB専門学校",
    description: "Webアプリ開発や最新の技術トレンドについてLTを行います。",
    tags: ["AI", "Web開発", "Next.js", "TypeScript"],
  },
];

const parseEventDate = (dateStr: string): Date => {
  // "2025年5月30日" の形式をパース
  const match = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (match) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1; // Dateオブジェクトでは月は0ベース
    const day = parseInt(match[3]);
    return new Date(year, month, day);
  }
  return new Date();
};

const getEventStatus = (dateStr: string): string => {
  const eventDate = parseEventDate(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 時間をリセットして日付のみで比較
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate > today) {
    return "参加予定";
  } else {
    return "参加済み";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "参加予定":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "参加済み":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "技術":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "ビジネス":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    case "デザイン":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function Events() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold py-6">参加イベント</h1>
          <p className="text-muted-foreground mb-8">
            技術、ビジネス、デザインなど様々な分野のイベントに参加し、知識とネットワークを広げています。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const status = getEventStatus(event.date);
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge className={getStatusColor(status)}>
                          {status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          {event.organization}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
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
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
