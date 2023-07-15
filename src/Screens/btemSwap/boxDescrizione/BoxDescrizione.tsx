import React, { useEffect, useState } from "react";
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
import bordo from "../../../components/video/bordo2.png";

import CopyToClipboard from "react-copy-to-clipboard";
import { LastFooter } from "../../../components/LastFooter";
import { Hidden } from "@mui/material";
var Contract2 = require("web3-eth-contract");

const BoxDescrizione = () => {
  const [copied, setCopied] = useState(false);
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
        <br />
        <br />
        <br />
        <br />

        <TitoloDescrizione>1. REFERRAL CODE</TitoloDescrizione>
        <TestoGrassetto>
          Invite a friends to EARN more BTEM with your ref code:
        </TestoGrassetto>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BoxRefCode />
          <CopyToClipboard text={"0x57b308E24Fa808BeF391D8402d2314fDD286d52f"}>
            <button
              style={{
                border: "none",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                background: "none",
              }}
              onClick={() => {
                var copyText = document.getElementById("add");
                setCopied(true);
              }}
            >
              <img
                alt="copy"
                style={{ width: 20, height: 20 }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nGNgGDZA52igt87RoCe6x4L/k4MZCFsQ/Jhcw3WJsYBoheQCulugQ2ac6ICC+niwJxEWUBAnR4MfEbSA3CDTxaVv1AIYGA0igmA0iAgCmpeuuoPGAh1qF3boAFTkkmXJ0eBHescCPTAMHLIAAAAcga4mAxLxAAAAAElFTkSuQmCC"
              ></img>

              {copied && (
                <p style={{ color: "white", fontSize: 10 }}>Copied!</p>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <TestoParagrafo>
          Depending on the amount of BTEM swapped by your friend
          <br /> we will give you a different % of BTEM as a gift.
        </TestoParagrafo>
        <img src={schemaRef} style={{ width: "26vw" }} />
        <img src={separatore} style={{ width: "54vw", marginTop: "5vh" }} />
        <TitoloDescrizione>2. TUTORIAL</TitoloDescrizione>
        <TestoParagrafo style={{ marginTop: "-10px" }}>
          Don't see the BTEM on your wallet Metamask?
        </TestoParagrafo>
        <TestoGrassetto>
          {" "}
          Import token with this contract address:
        </TestoGrassetto>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BoxRefCode>0x57b308E24Fa808BeF391D8402d2314fDD286d52f </BoxRefCode>
          <CopyToClipboard text={"0x57b308E24Fa808BeF391D8402d2314fDD286d52f"}>
            <button
              style={{
                border: "none",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                background: "none",
              }}
              onClick={() => {
                var copyText = document.getElementById("add");
                setCopied(true);
              }}
            >
              <img
                alt="copy"
                style={{ width: 20, height: 20 }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nGNgGDZA52igt87RoCe6x4L/k4MZCFsQ/Jhcw3WJsYBoheQCulugQ2ac6ICC+niwJxEWUBAnR4MfEbSA3CDTxaVv1AIYGA0igmA0iAgCmpeuuoPGAh1qF3boAFTkkmXJ0eBHescCPTAMHLIAAAAcga4mAxLxAAAAAElFTkSuQmCC"
              ></img>

              {copied && (
                <p style={{ color: "white", fontSize: 10 }}>Copied!</p>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <TestoParagrafo>
          If you need help you can contact us or <br />
          watch this video for all the steps to swap BTEM!
        </TestoParagrafo>
        <iframe
          style={{
            width: "54vw",
            height: "30vw",
          }}
          src="https://www.youtube.com/embed/Ze9r6c1OOM4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            marginTop: "100px",
          }}
        >
          <img src={bordo} style={{ width: "100%" }} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1C1C1C",
            color: "white",
            height: "100px",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            Besteam Game S.R.L. © 2022, All rights reserved - VAT 16643031004,
            Roma
          </p>
        </div>
      </ContainerDescrizione>
      <LastFooter />
    </>
  );
};

export default BoxDescrizione;
