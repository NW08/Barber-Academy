import type { FC } from "react";
import Heading from "./Heading";
import Section from "../Section/Section.tsx";
import Tagline from "./Tagline";
import { roadmap } from "../Links.ts";
import check2 from "../../assets/design/check-02.svg";
import grid from "../../assets/design/grid.png";
import loading1 from "../../assets/design/loading-01.svg";
import { Gradient } from "../design/Roadmap";
import Button from "../design/buttons/Button.tsx";

interface RoadmapItem {
  id: string | number;
  title: string;
  text: string;
  date: string;
  imageUrl: string;
  status: "done" | "progress" | string; // flexible por si usas otros
  colorful?: boolean;
}

const Roadmap: FC = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
        {roadmap.map((item: RoadmapItem) => {
          const statusText = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id}
              className={`md:flex even:md:translate-y-28 p-px rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>

                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-108 mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={statusText}
                      />
                      <div className="tagline">{statusText}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
