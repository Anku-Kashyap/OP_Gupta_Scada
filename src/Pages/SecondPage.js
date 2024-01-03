import React from 'react'
import Instant from '../Component/Instantaneous/Instant';
import Header from "../../src/Component/Header/Header";
import Login from "../Component/Login/Login";
import { useMyContext } from "../Component/Context";

function SecondPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <Instant />
      </>
  ) : (
    <Login />
  );
}

export default SecondPage
