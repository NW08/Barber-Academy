import type { FC } from "react";
import Section from "../Section/Section.tsx";
import Heading from "./Heading";
import check from "../../assets/design/check.svg";
import service1 from "../../assets/design/services/service-1.png";
import { brainwaveServices, brainwaveServicesIcons } from "../Links.ts";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";
import Generating from "./Generating";
import { service2, service3 } from "../../assets/design";

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          {/* --- MAIN FEATURE BLOCK --- */}
          <div className="relative z-1 flex items-center h-156 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-184">
            {/* Background image */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

            {/* Text block */}
            <div className="relative z-1 max-w-68 ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Generating widget */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* --- SECOND ROW --- */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Photo editing block */}
            <div className="relative min-h-156 border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            {/* Video generation block */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-184">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-8 text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item: string, index: number) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-12 h-12 p-px bg-conic-gradient md:w-18 md:h-18"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                            : ""
                        }
                      >
                        <img
                          src={item}
                          width={24}
                          height={24}
                          alt={`icon-${index}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 bg-n-8 rounded-xl overflow-hidden md:h-100">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          {/* Gradient decoration */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
