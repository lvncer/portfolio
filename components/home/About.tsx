import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import myimg from "@/public/profile.png";
import { LazyLoad } from "@/components/ui/lazy-load";

// プロフィール画像を最適化するコンポーネント
const ProfileImage = () => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
      <Image
        src={myimg}
        alt="Profile"
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );
};

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-48" id="about">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="mb-12" />
        <LazyLoad>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ProfileImage />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">はじめまして！</h2>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      学校: さいたまIT・WEB専門学校
                    </p>
                    <p className="text-muted-foreground">
                      学科: 高度専門士情報技術科
                    </p>
                    <p className="text-muted-foreground">年次: 3年</p>
                    <p className="text-muted-foreground">
                      名前: 高橋 (ネット上名義: lvncer)
                    </p>
                    <p className="text-muted-foreground">
                      システム開発のフルスタックエンジニアを目指しています。よろしくお願いいたします。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">経験してきたこと</h3>
                    <p className="text-muted-foreground">
                      WEBアプリやシステムなどの開発を、チームを含めて積極的に挑戦し、経験してきました。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">興味があること</h3>
                    <p className="text-muted-foreground">
                      AI関連の最新技術を探求したり、OSSのプロジェクトに貢献したり、開発者コミュニティと知識を共有したりしています。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">趣味に関すること</h3>
                    <p className="text-muted-foreground">
                      アート、ガジェット、ゲームなど
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </LazyLoad>
      </div>
    </div>
  );
};
