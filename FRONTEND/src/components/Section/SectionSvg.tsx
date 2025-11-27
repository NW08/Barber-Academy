import type { FC } from "react";
import PlusSvg from "./PlusSvg";

interface SectionSvgProps {
  crossesOffset?: string;
}

const SectionSvg: FC<SectionSvgProps> = ({ crossesOffset = "" }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-1.25 left-7.5 ${crossesOffset} pointer-events-none lg:block xl:left-10`}
      />

      <PlusSvg
        className={`hidden absolute -top-1.25 right-7.5 ${crossesOffset} pointer-events-none lg:block xl:right-10`}
      />
    </>
  );
};

export default SectionSvg;
