import React from "react";
import Home from "../Component/Home/Home";
import Header from "../../src/Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function HomePage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <Home />
    </>
  ) : (
    <Login />
  );
}

export default HomePage;
