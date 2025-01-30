import { Button } from "@/components/ui/button";
import { CloudDownload, Mail } from "lucide-react";
import SparklesText from "./ui/sparkles-text";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="h-[60dvh] sm:h-[80dvh] md:h-screen flex items-center justify-between overflow-hidden relative mt-40 md:mt-10">
        {/* <Meteors number={50} /> */}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex flex-col items-center gap-4">
            <span>Hi,</span>
            <SparklesText
              className="text-3xl sm:text-4xl md:text-5xl"
              text="I'm Bishal Dahal Khatri"
            ></SparklesText>
          </h1>

          <p className="text-base sm:text-3xl font-medium motion-preset-typewriter-[17] motion-duration-[7s] motion-ease-in-out text-violet-500">
            Health Researcher
          </p>

          {/* Description */}
          <p className="tracking-wide mt-6 mb-8 text-sm sm:text-base text-center">
            I am a dedicated researcher exploring the impact of climate change
            on human health. My work focuses on how climatic variables affect
            health system. Through research and policy analysis, I am to build
            climate resilient health system
          </p>

          {/* Button */}
          <div className="flex items-center gap-6">
            <a href="/CV.pdf" download="bishal_dahal_khatri_cv.pdf">
              <Button>
                <CloudDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
            </a>
            <Button>
              <Mail />
              <span>Contact Me</span>
            </Button>
          </div>

          <div className="mt-10 flex gap-3 items-center">
            <a
              href="https://www.facebook.com/share/14pVuwQCs1/?mibextid=wwXIfr"
              target="_blank"
            >
              <FaFacebookSquare
                size={35}
                className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </a>
            <FaSquareXTwitter
              size={35}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* <div className="flex flex-col items-center gap-4 mt-10">
            <span>scroll down</span>
            <ArrowBigDownDash size={50} className="animate-bounce" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
