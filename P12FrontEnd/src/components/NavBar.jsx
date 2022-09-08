import logo from "/logo.svg";
import PropTypes from "prop-types";

export default function NavBar({ changeUser }) {
  return (
    <nav className=" font-roboto  text-2xl w-full h-[91px] bg-blackBg px-6 shadow-navShadow flex  justify-between items-center mx-auto z-10 fixed">
      <a href="#" className="flex items-center">
        <img src={logo} alt="logo" className="mr-2.5" />
        <span className="text-red230">SportSee</span>
      </a>
      <ul className="font-medium flex text-white items-center justify-between w-4/6">
        <li className="cursor-pointer">Accueil</li>
        <li className="cursor-pointer animate-pulse" onClick={changeUser}>
          Profil
        </li>
        <li className="cursor-pointer">Réglage</li>
        <li className="cursor-pointer">Communauté</li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  changeUser: PropTypes.func.isRequired,
};
