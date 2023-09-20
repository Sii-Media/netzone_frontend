import React from "react";
import Header from "../../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./Root.module.css";
import logo from "../../assets/netzoon-logo.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Root = () => {
  const state = useNavigation();
  return (
    <>
      <ScrollToTop />
      <Header />
      {state.state === "loading" && (
        <div className={`h-screen flex  items-center justify-center`}>
          <img
            src={logo}
            alt={logo.toString().slice(0, 3)}
            className={`${styles.loading} w-56 opacity-20`}
          />
          <p className={`text-4xl opacity-20 text-[#2072B7] ${styles.loading}`}>
            ......
          </p>
        </div>
      )}
      {state.state === "idle" && (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Root;
// export const loaderRoot = async()=>{

// }
