import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

function LayOut({ children }) {
  console.log(children);
  return (
    <div>
      <Header />
      {children}
      {/* <Outlet /> */}
    </div>
  );
}

export default LayOut;
