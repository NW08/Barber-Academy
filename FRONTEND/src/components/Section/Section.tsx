import type { FC, ReactNode } from "react";
import SectionSvg from "./SectionSvg";

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({
  className = "",
  id,
  crosses = false,
  crossesOffset = "",
  customPaddings = false,
  children,
}) => {
  const strokeColor = "bg-[#26242C]";

  const paddingClasses = customPaddings
    ? ""
    : `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`;

  return (
    <div id={id} className={`relative ${paddingClasses} ${className}`}>
      {children}

      <div
        className={`hidden absolute top-0 left-5 w-px h-full ${strokeColor} pointer-events-none md:block lg:left-7.5 xl:left-10`}
      />

      <div
        className={`hidden absolute top-0 right-5 w-px h-full ${strokeColor} pointer-events-none md:block lg:right-7.5 xl:right-10`}
      />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-px ${strokeColor} ${crossesOffset} pointer-events-none lg:block 
            xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
