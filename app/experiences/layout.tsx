import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/certifications"
            className="inline-flex items-center text-sm mb-8 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 -mt-0.5 mr-3" />
            Experienceページに戻る
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
