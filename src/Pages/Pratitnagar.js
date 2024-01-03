import React from "react";
import ZoneWisePratitnagar from "../Component/ZoneWise/ZoneWisePratitnagar";
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function Pratitnagar() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWisePratitnagar />
    </>
  ) : (
    <Login />
  );
}

export default Pratitnagar;
