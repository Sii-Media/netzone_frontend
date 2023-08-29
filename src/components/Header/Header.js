import NetzoonLogo from "../../assets/netzoon-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import CurrencyFlagSelect from "./CurrencyFlagSelect";
import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import AddA from "./AddA";
import { useState } from "react";
import Search from "./Search";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const navHandler = () => {
    setIsNav((isNav) => !isNav);
  };
  const NavLinks = [
    {
      path: "/cart",
      title: <AiOutlineShoppingCart className={`text-3xl`} />,
    },
    {
      path: "/notification",
      title: <IoMdNotificationsOutline className={`text-3xl`} />,
    },
    {
      path: "/profile",
      title: <GoPerson className={`text-3xl`} />,
    },
    {
      path: "/more",
      title: <RxHamburgerMenu className={`text-3xl`} />,
    },
  ];
  return (
    <header
      className={`px-4 py-4 top-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full fixed bg-white flex flex-col md:flex-row justify-between items-center z-50`}
    >
      <NavLink to="/">
        <img
          src={NetzoonLogo}
          alt={NetzoonLogo.toString()}
          className={`w-[150px] mb-2 md:mb-0`}
        />
      </NavLink>
      <Search />
      <nav className={`flex items-center justify-between flex-1`}>
        <AddA />
        <GiHamburgerMenu
          className={`block md:hidden text-2xl mx-4 cursor-pointer`}
          onClick={navHandler}
        />
        <div
          className={`mx-0 md:w-[300px] p-4 md:p-1 ${
            isNav ? "block" : "hidden"
          } md:block bg-white absolute  md:relative top-[10rem] md:top-0 left-0 w-full md:w-auto  flex-1`}
        >
          <ul className={`flex justify-between items-center w-[350px]`}>
            <LanguageSwitcher />
            <CurrencyFlagSelect />
            {NavLinks.map((ele, i) => (
              <CustomNavLink key={i} path={ele.path}>
                {ele.title}
              </CustomNavLink>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
