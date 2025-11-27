import type { FC } from "react";
import Section from "../Section/Section";
import { socials } from "../../assets/components/Footer/FooterConstants";

interface SocialItem {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}

interface SocialLinkProps {
  item: SocialItem;
}

const SocialLink: FC<SocialLinkProps> = ({ item }) => (
  <li>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
      aria-label={`Visitar nuestra página de ${item.title}`}
    >
      <img
        src={item.iconUrl}
        width={35}
        height={35}
        alt={item.title}
        className="object-contain"
      />
    </a>
  </li>
);

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      crosses
      className="px-0! py-10! mt-auto backdrop-blur-md bg-black/20"
    >
      {/* FIX: 'container' necesita 'mx-auto' para centrarse horizontalmente.
         Se eliminó 'pl-80'.
      */}
      <div className="container mx-auto flex sm:justify-between lg:backdrop-blur-sm justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {currentYear}. Desarrollo de Aplicaciones Web.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <SocialLink key={item.id} item={item as SocialItem} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
