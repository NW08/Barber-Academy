import React from "react";
import background from "../../assets/pages/Home/background.png";

export const Rings: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-205.5 aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute top-1/2 left-1/2 w-144.5 aspect-square border border-n-2/10 rounded-full -translate-x-1/2
      -translate-y-1/2"
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-92.5 aspect-square border border-n-2/10 rounded-full -translate-x-1/2
      -translate-y-1/2"
      ></div>
    </div>
  );
};

export const SideLines: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-px h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-px h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles: React.FC = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-linear-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-linear-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-linear-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const HamburgerMenu: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.2]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />
      <SideLines />
      <BackgroundCircles />
    </div>
  );
};
