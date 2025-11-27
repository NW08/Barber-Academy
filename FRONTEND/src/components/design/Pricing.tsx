import React from "react";
import { lines } from "../../assets/design/index.ts";

export const LeftLine: React.FC = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-370 h-44.25 -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine: React.FC = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-370 h-44.25 -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
