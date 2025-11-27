import type { FC } from "react";
import PlusSvg from "../Section/PlusSvg.tsx";

export const BottomLine: FC = () => {
  return (
    <>
      <div className="hidden absolute top-221 left-10 right-10 h-px bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-219.75 left-8.75 z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-219.75 right-8.75 z-2 pointer-events-none xl:block" />
    </>
  );
};
