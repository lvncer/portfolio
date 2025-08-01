import Image from "next/image";
import myimg from "@/public/profile.jpeg";
import { LazyLoad } from "@/components/ui/lazy-load";
import { AnimatedElement } from "@/components/ui/animated-element";

// プロフィール画像を最適化するコンポーネント
const ProfileImage = () => {
  return (
    <div className="relative group w-full">
      <div className="absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl p-2">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={myimg}
            alt="Profile"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="relative py-48 overflow-hidden" id="about">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Reduced background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement delay={0.2} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-4">
              About
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Who I am & what I do
            </p>
          </AnimatedElement>

          <LazyLoad>
            <AnimatedElement
              delay={0.4}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="lg:order-1 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                <ProfileImage />
              </div>

              <div className="lg:order-2 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-medium text-white">
                    Hello, I&apos;m Takahashi
                  </h2>

                  <div className="space-y-4 text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="font-light">
                        Student at Saitama IT & Web College
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-light">
                        Advanced Information Technology (3rd year)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-gray-200 font-light leading-relaxed">
                      Building Web Apps & Systems with Passionate Teams
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-200 font-light leading-relaxed">
                      AI Tech Exploration / OSS Contributions / Dev Community
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-lg text-gray-300 font-light italic">
                    &quot;Aspiring Fullstack Engineer&quot;
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};
