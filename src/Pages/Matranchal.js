import React from "react";
import ZoneWiseMatranchal from "../Component/ZoneWise/ZoneWiseMatranchal";
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function Matranchal() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseMatranchal />
    </>
  ) : (
    <Login />
  );
}

export default Matranchal;
