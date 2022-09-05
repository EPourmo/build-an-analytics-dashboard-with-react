import logo from "/logo.svg";

export default function NavBar() {
  return (
    <nav className=" font-roboto  text-2xl w-full h-[91px] bg-blackBg px-6 shadow-navShadow flex  justify-between items-center mx-auto">
      <a href="#" className="flex items-center">
        <img src={logo} alt="logo" className="mr-2.5" />
        <span className="text-red230">SportSee</span>
      </a>
      <ul className="font-medium flex text-white items-center justify-between w-4/6">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}
