import discordBlack from "./discord.svg";
import x from "./x.svg";
import instagram from "./instagram.svg";
import telegram from "./telegram.svg";
import facebook from "./facebook.svg";

export interface SocialItem {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}

export const socials: SocialItem[] = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/",
  },
  { id: "1", title: "X", iconUrl: x, url: "https://x.com/home" },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://web.telegram.org/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/",
  },
];
