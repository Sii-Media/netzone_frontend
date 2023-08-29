import React from "react";
import Header from "../../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const state = useNavigation();
  return (
    <>
      <Header />
      {state.state === "loading" && (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          Loading Please Wait.......
        </p>
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