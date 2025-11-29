import Button from "../Buttons/Button";

export const AuthButtons = () => (
  <>
    <a
      className="hidden mr-8 text-white/50 transition-colors hover:text-white lg:block text-base font-code font-semibold"
      href="/signup"
    >
      Regístrate
    </a>
    <Button
      className="hidden lg:flex text-base font-semibold text-white/50 hover:text-white"
      href="/login"
    >
      Inicia Sesión
    </Button>
  </>
);
