import React from "react";
import { ButtonConnessioneDapp, HeaderContainerDapp } from "./HeaderDappStyled";
import { TestoButton } from "../../Screens/btemSwap/boxIscrizione/BoxIscrizioneStyled";

const HeaderDapp = () => {
  return (
    <>
      <HeaderContainerDapp>
        <ButtonConnessioneDapp>
      <TestoButton style={{ fontFamily: "DinPRONormale" }}>
            METAVERSE
          </TestoButton>
          </ButtonConnessioneDapp>
          <ButtonConnessioneDapp>
      <TestoButton style={{ fontFamily: "DinPRONormale" }}>
            NFT
          </TestoButton>
          </ButtonConnessioneDapp>
          <p>EVENTS</p>
          <p>MARKET</p>
          <p>TEAM</p>
          <p>PLAYER</p>
          
      </HeaderContainerDapp>
    </>
  );
};

export default HeaderDapp;
