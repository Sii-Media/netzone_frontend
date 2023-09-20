import React, { useState, useEffect } from "react";
import NetzoonLogo from "../../assets/netzoon-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import CurrencyFlagSelect from "./CurrencyFlagSelect";
import { Link, NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import AddA from "./AddA";
import Search from "./Search";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const [isMark, setIsMark] = useState(true);
  const isMarkHandler = () => {
    setIsMark(false);
  };
  const navLinkClickHandler = () => {
    setIsNav(false);
  };
  const [isNav, setIsNav] = useState(false);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  useEffect(() => {
    setCartTotalItems(
      JSON.parse(window.localStorage.getItem("cartItems"))
        ? JSON.parse(window.localStorage.getItem("cartItems")).length
        : 0
    );
  }, []);

  const navHandler = () => {
    setIsNav((isNav) => !isNav);
  };

  const NavLinks = [
    {
      path: "/cart",
      title: (
        <div className={`relative hidden md:block`}>
          <AiOutlineShoppingCart className={`text-3xl`} />
          <span
            className={`absolute -top-2 -right-1 w-4 h-4 bg-red-600 rounded-full text-white flex justify-center items-center text-sm font-normal`}
          >
            {cartTotalItems}
          </span>
        </div>
      ),
    },
    {
      path: "/notification",
      title: window.localStorage.getItem("user") ? (
        <div className={`relative hidden md:block`}>
          {isMark && (
            <span
              className={`w-3 h-3 bg-red-600 z-50 absolute top-0 right-0 rounded-full`}
            ></span>
          )}
          <IoMdNotificationsOutline
            className={`text-3xl`}
            onClick={isMarkHandler}
          />
        </div>
      ) : (
        <IoMdNotificationsOutline className={`text-3xl`} />
      ),
    },
    {
      path: "/profile",
      title: window.localStorage.getItem("user") ? (
        <img
          src={
            JSON.parse(window.localStorage.getItem("user")).result.profilePhoto
          }
          alt={JSON.parse(window.localStorage.getItem("user")).result.username}
          className={`hidden md:block w-10 h-10 object-cover rounded-full `}
        />
      ) : (
        <GoPerson className={`text-3xl`} />
      ),
    },
    {
      path: "/more",
      title: <RxHamburgerMenu className={`hidden md:block text-3xl`} />,
    },
  ];

  return (
    <header
      className={`px-4 py-4 top-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full fixed bg-white flex flex-col md:flex-row justify-between items-center z-50`}
    >
      <div
        className={`md:hidden flex items-center justify-between w-full mb-2`}
      >
        <NavLink to="/">
          <img
            src={NetzoonLogo}
            alt={NetzoonLogo.toString()}
            className={`block md:hidden  w-[100px] mb-2 md:mb-0 cursor-pointer`}
          />
        </NavLink>
        <Search
          className={`!block md:!hidden !flex-1 !text-base !font-medium !ml-2 !mr-2`}
          placeholder="Search..."
        />
        <Link
          className={`mr-2 block md:hidden`}
          onClick={navLinkClickHandler}
          to="/profile"
        >
          {window.localStorage.getItem("user") ? (
            <img
              src={
                JSON.parse(window.localStorage.getItem("user")).result
                  .profilePhoto
              }
              alt={
                JSON.parse(window.localStorage.getItem("user")).result.username
              }
              className={` w-10 h-10 object-cover rounded-full `}
            />
          ) : (
            <GoPerson className={`text-3xl`} />
          )}
        </Link>
        <NavLink to="/more">
          <RxHamburgerMenu className={`block md:hidden text-2xl`} />
        </NavLink>
      </div>
      <div className={`md:hidden flex items-center justify-between w-full`}>
        <LanguageSwitcher className={`block md:hidden`} />
        <CurrencyFlagSelect className={`block md:hidden`} />
        <AddA className={`block md:hidden w-24`} />
        <NavLink to="/notification" className={`block md:hidden`}>
          {window.localStorage.getItem("user") ? (
            <div className={`relative`}>
              {isMark && (
                <span
                  className={`w-3 h-3 bg-red-600 z-50 absolute top-0 right-0 rounded-full`}
                ></span>
              )}
              <IoMdNotificationsOutline
                className={`text-3xl`}
                onClick={isMarkHandler}
              />
            </div>
          ) : (
            <IoMdNotificationsOutline className={`text-3xl`} />
          )}
        </NavLink>
        <Link to="/cart" className={`block md:hidden relative`}>
          <AiOutlineShoppingCart className={`text-3xl`} />
          <span
            className={`absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full text-white flex justify-center items-center text-xm font-light`}
          >
            {cartTotalItems}
          </span>
        </Link>
      </div>
      <NavLink to="/">
        <img
          src={NetzoonLogo}
          alt={NetzoonLogo.toString()}
          className={`hidden md:block  w-[150px] mb-2 md:mb-0 cursor-pointer`}
        />
      </NavLink>
      <Search className={`!hidden md:!block`} />
      <nav className={`flex items-center justify-between flex-1`}>
        <AddA className={`hidden md:block`} />

        <div
          className={`mx-0 md:w-[300px] p-4 md:p-1 ${
            isNav ? "block" : "hidden"
          } md:block bg-white absolute  md:relative top-[10rem] md:top-0 left-0 w-full md:w-auto  flex-1`}
        >
          <ul className={`flex justify-between items-center  `}>
            <LanguageSwitcher className={`hidden md:block`} />
            <CurrencyFlagSelect className={`hidden md:block`} />
            {NavLinks.map((ele, i) => (
              <CustomNavLink
                onClick={navLinkClickHandler}
                key={i}
                path={ele.path}
              >
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
