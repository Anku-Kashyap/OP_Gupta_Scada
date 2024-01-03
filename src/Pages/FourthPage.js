import React from "react";
import LogBook from "../Component/LogBook/LogBook";
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function FourthPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <LogBook />
    </>
  ) : (
    <Login />
  );
}

export default FourthPage;
