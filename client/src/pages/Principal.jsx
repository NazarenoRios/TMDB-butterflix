import React from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import Devices from "../components/LoginPage/Devices";
import LoginBanner from "../components/LoginPage/LoginBanner";
import LoginNav from "../components/LoginPage/LoginNav";
import LoginPhotos from "../components/LoginPage/LoginPhotos";
import LoginStream from "../components/LoginPage/LoginStream";
import PreFooter from '../common/PreFooter'

function Principal() {
  return (
    <>
      <Main>
        <LoginNav />
        <LoginBanner />
        <LoginStream />
        <LoginPhotos />
        <Devices />
        <PreFooter/>
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
  background: #050714;
`;

export default Principal;
