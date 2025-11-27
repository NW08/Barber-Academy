import academy from "../../assets/components/Header/logo.svg";

interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <a className="block w-48 xl:mr-8 z-50" href="/" onClick={onClick}>
    <img src={academy} alt="Barber Academy" width={75} />
  </a>
);
