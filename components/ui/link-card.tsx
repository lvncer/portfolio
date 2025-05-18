import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type LinkCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  isExternalLink?: boolean;
};

export const LinkCard = ({
  title,
  description,
  icon: Icon,
  url,
  isExternalLink = true,
}: LinkCardProps) => {
  return (
    <Link
      href={url}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className="block w-full h-full"
    >
      <Card className="h-full group relative transition-all duration-300 hover:shadow-md overflow-hidden cursor-pointer">
        {/* グラデーションボーダー */}
        <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-blue-700/5 via-purple-700/5 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardHeader>
          <div className="flex items-center gap-4">
            <Icon className="h-8 w-8 mr-2 transition-colors" />
            <div>
              <CardTitle>{title}</CardTitle>
              <div className="mb-2" />
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
