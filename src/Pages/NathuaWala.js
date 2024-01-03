import React from "react";
import Default from "../Component/Default/Default";
import ZoneWiseNathuaWala from "../Component/ZoneWise/ZoneWiseNathuawala";
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function NathuaWala() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseNathuaWala />
    </>
  ) : (
    <Login />
  );
}

export default NathuaWala;
