import React from "react";
import LogWise from "../Component/logwise/LogWise";
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function ThirdPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <LogWise />
    </>
  ) : (
    <Login />
  );
}

export default ThirdPage;
