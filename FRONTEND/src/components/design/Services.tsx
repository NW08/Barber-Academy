import React from "react";
import {
  brainwaveWhiteSymbol,
  gradient,
  play,
} from "../../assets/design/index.ts";
import ChatBubbleWing from "../../assets/design/svg/ChatBubbleWing.tsx";

export const Gradient: React.FC = () => {
  return (
    <div className="absolute top-0 -left-40 w-226.5 h-226.5 opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-318.25 max-w-318.25 h-354.25 -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage: React.FC = () => {
  return (
    <div
      className="absolute top-8 right-8 max-w-70 py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16
    lg:right-35 lg:max-w-70"
    >
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage: React.FC = () => {
  return (
    <div
      className="absolute top-8 left-12.5 w-full max-w-56 pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code
    text-base md:max-w-70"
    >
      Video generated!
      <div className="absolute left-5 -bottom-4.5 flex items-center justify-center w-9 h-9 bg-color-1 rounded-xl">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar: React.FC = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
