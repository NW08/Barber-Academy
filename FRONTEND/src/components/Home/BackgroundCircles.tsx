import type { FC, RefObject } from "react";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import { Rings } from "./Rings.tsx";

interface BackgroundCirclesProps {
  parallaxRef?: RefObject<HTMLDivElement | null>;
}

export const BackgroundCircles: FC<BackgroundCirclesProps> = ({
  parallaxRef,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="absolute -top-169.5 left-1/2 w-312 aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-154
    xl:-top-128"
    >
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {/* Naranja pequeño */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom rotate-46">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-linear-to-b from-[#DD734F] to-[#1A1A32]
              rounded-full transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>

        {/* Naranja grande */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom -rotate-56">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-linear-to-b from-[#DD734F] to-[#1A1A32]
              rounded-full transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>

        {/* Morado xl (solo desktop) */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom rotate-54">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-linear-to-b from-[#B9AEDF] to-[#1A1A32]
              rounded-full xl:block transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>

        {/* Morado pequeño */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom -rotate-65">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-linear-to-b from-[#B9AEDF] to-[#1A1A32]
              rounded-full transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>

        {/* Verde grande 1 */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom -rotate-85">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-linear-to-b from-[#88E5BE] to-[#1A1A32]
              rounded-full transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>

        {/* Verde grande 2 */}
        <div className="absolute bottom-1/2 left-1/2 w-px h-1/2 origin-bottom rotate-70">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-linear-to-b from-[#88E5BE] to-[#1A1A32]
              rounded-full transition-transform duration-500 ease-out
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
