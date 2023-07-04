import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import {
  BoxRefCode,
  ContainerDescrizione,
  TestoGrassetto,
  TestoParagrafo,
  TitoloDescrizione,
} from "./BoxDescrizioneStyled";
import schemaRef from "../assets/img/schemaRef.png";
import separatore from "../assets/img/separatore.png";
import { useWeb3React } from "@web3-react/core";
import abiBTEM from "../../../components/BtemSaleAbi.json";
var Contract2 = require("web3-eth-contract");

const BoxDescrizione = () => {
  const { account } = useWeb3React();
  const SWAP_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiBTEM, SWAP_ADDRESS);
  useEffect(() => {
    console.log(contract);
  }, [account]);
  return (
    <>
      <ContainerDescrizione>
        <TitoloDescrizione>1. REFERRAL CODE</TitoloDescrizione>
        <TestoGrassetto>
          Invite a friends to EARN more BTEM with your ref code:
        </TestoGrassetto>
        <BoxRefCode />
        <TestoParagrafo>
          Depending on the amount of BTEM swapped by your friend
          <br /> we will give you a different % of BTEM as a gift.
        </TestoParagrafo>
        <img src={schemaRef} style={{ width: "26vw" }} />
        <img src={separatore} style={{ width: "54vw", marginTop: "5vh" }} />
        <TitoloDescrizione>2. TUTORIAL</TitoloDescrizione>
        <TestoParagrafo>
          Don't see the BTEM on your wallet Metamask?
        </TestoParagrafo>
        <TestoGrassetto>
          {" "}
          Import token with this contract address:
        </TestoGrassetto>
        <BoxRefCode>0x57b308E24Fa808BeF391D8402d2314fDD286d52f </BoxRefCode>
        <TestoParagrafo>
          If you need help you can contact us or <br />
          watch this video for all the steps to swap BTEM!
        </TestoParagrafo>
      </ContainerDescrizione>
    </>
  );
};

export default BoxDescrizione;
