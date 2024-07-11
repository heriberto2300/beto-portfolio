const NavBar = () => {
  return (
    <header
      className="w-full h-[80px] sticky top-0 z-10 flex items-center justify-between px-[2rem]" 
      id="navbar-blur"
    >
      <a href="/" className="text-xl">Inicio</a>
      <span className="opacity-65">Sitio Aun en desarrollo</span>
    </header>
  );
};

export default NavBar;