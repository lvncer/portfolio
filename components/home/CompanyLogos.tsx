import Image from "next/image";

const companies = [
  {
    name: "Google Cloud",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    type: "image",
  },
  {
    name: "Anthropic",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/anthropic-text.png",
    type: "image",
  },
  {
    name: "Anysphere",
    logo: "https://www.dormroomfund.com/brand/companies/anysphere_logo.png",
    type: "image",
  },
  {
    name: "Supabase",
    logo: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-wordmark--dark.png",
    type: "image",
  },

  {
    name: "GitHub",
    logo: "https://wallpapers.com/images/hd/git-hub-logo-social-coding-j10br9y9f6iflxbq.png",
    type: "image",
  },
  {
    name: "AWS",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-brand.png",
    type: "image",
  },
  {
    name: "Microsoft",
    logo: "https://freepnglogo.com/images/all_img/1708533867microsoft-logo-white-png.png",
    type: "image",
  },
  {
    name: "OpenAI",
    logo: "https://ai.ls/assets/openai-logos/PNGs/openai-white-lockup.png",
    type: "image",
  },
  {
    name: "NeonDB",
    logo: "https://twingo.co.il/wp-content/uploads/2025/05/NeonDB-White-1024x290.png",
    type: "image",
  },
  {
    name: "Vercel",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel-text.png",
    type: "image",
  },
];

const LogoItem = ({ company }: { company: (typeof companies)[0] }) => (
  <div className="flex items-center justify-center min-w-[280px] h-16 px-6 flex-shrink-0">
    {company.type === "image" && (
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={company.logo}
          alt={company.name}
          width={240}
          height={60}
          className="object-contain max-w-[240px] max-h-[60px] filter brightness-75 opacity-60 transition-all duration-300"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "240px",
            maxHeight: "60px",
          }}
        />
      </div>
    )}
  </div>
);

export const CompanyLogos = () => {
  // 各アイテムの幅(280px) + gap(48px) = 328px
  // 全アイテム数 × 328px = 総幅
  const totalWidth = companies.length * 328;
  // アニメーション時間を総幅に比例して計算（1px = 0.1s程度）
  const animationDuration = Math.max(totalWidth / 50, 30);

  return (
    <div className="max-w-7xl mx-auto relative py-32 overflow-hidden">
      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10">
        <div className="relative">
          {/* Gradient mask for fade effect */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l" />
          </div>

          {/* Single scrolling container with proper duplication */}
          <div
            className="flex animate-marquee gap-12"
            style={{
              width: `${totalWidth * 2}px`, // 2倍の幅を確保
            }}
          >
            {/* 完全に同じセットを2回レンダリング */}
            {companies.map((company, index) => (
              <LogoItem
                key={`first-${company.name}-${index}`}
                company={company}
               
              />
            ))}
            {companies.map((company, index) => (
              <LogoItem
                key={`second-${company.name}-${index}`}
                company={company}
               
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        .animate-marquee {
          animation: marquee ${animationDuration}s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
