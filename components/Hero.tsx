import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 h-screen flex justify-center items-center ">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.3]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:60px_60px]",
                        "[background-image:linear-gradient(to_right,rgba(228,228,231,0.8)_0.1px,transparent_2px),linear-gradient(to_bottom,rgba(228,228,231,0.8)_0.1px,transparent_2px)]",
                        "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.8)_0.1px,transparent_2px),linear-gradient(to_bottom,rgba(38,38,38,0.8)_0.1px,transparent_2px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
                        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web Magic with <span className="text-purple">Next.js</span></h2>
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into Seamless User Experiences" />
                        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi, I'm <span className="text-purple">Moamen</span>, a Next.js Developer based in Damascus</p>
                        <a href="#about">
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
