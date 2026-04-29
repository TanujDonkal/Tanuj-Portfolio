import { getImgPath } from "@/utils/image";
import Image from "next/image";

const HeroSection = () => {
  const heroImage = getImgPath("/images/home/banner/tanuj-hero.png");

  return (
    <section
      id="home"
      className="relative hero-section scroll-mt-24 overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-40 lg:min-h-[700px] lg:pb-24 xl:pt-52"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="flex max-w-2xl flex-col gap-4 md:gap-7">
            <div>
              <div className="flex items-center gap-4 sm:gap-8">
                <h1>I&apos;m Tanuj</h1>
                <div className="wave shrink-0">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className="h-10 w-10 sm:h-[62px] sm:w-[62px]"
                  />
                </div>
              </div>
              <h1>Full Stack Developer</h1>
            </div>
            <p className="max-w-md font-normal text-secondary xl:max-w-xl">
              Software Engineer with hands-on experience building scalable web
              applications using React, TypeScript, and Node.js. Passionate
              about designing clean, efficient, and scalable software solutions.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:hidden">
            <Image
              src={heroImage}
              alt="Tanuj Kumar smiling at a developer workspace"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 hidden h-full w-[48%] lg:block">
        <Image
          src={heroImage}
          alt="Tanuj Kumar smiling at a developer workspace"
          fill
          priority
          sizes="48vw"
          className="object-cover object-[52%_50%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
