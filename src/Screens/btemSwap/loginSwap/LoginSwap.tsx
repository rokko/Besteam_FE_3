import React, { useState } from "react";
import styled from "styled-components";
import SfondoSupport from "../../../components/video/sfondoSupport.jpg";
import bordo from "../../../components/video/bordo2.png";
import { LastFooter } from "../../../components/LastFooter";
import separatore from "../../btemSwap/assets/img/separatore.png";
import { BoxIscrizione } from "../boxIscrizione";
import { BoxDescrizione } from "../boxDescrizione";
import freccia2 from "../../../components/video/freccia2.png";
import { JsxElement, isJsxElement } from "typescript";
import {
  ButtonSignUp,
  TestoButton,
} from "../boxIscrizione/BoxIscrizioneStyled";

const BoxSupport = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${SfondoSupport}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const LoginSwap = () => {
  const [attivo, setAttivo] = useState(false);
  const [attivo2, setAttivo2] = useState(false);
  const [accesso, setAccesso] = useState(true);

  window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setAttivo(true);
    } else {
      setAttivo(false);
    }
  }
  function scrollFunction2() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setAttivo2(true);
    } else {
      setAttivo2(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  if (!!accesso)
    return (
      <>
        <BoxSupport>
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "8.30vh",
              color: "#31c652",
              marginTop: "12vh",
            }}
          >
            if You are here
          </p>
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "11.86vh",
              color: "white",
              marginTop: "-10vh",
              lineHeight: "12vh",
            }}
          >
            YOU ARE A TRUE FAN OF <br />
            VIRTUAL FOOTBALL 11vs11
          </p>
          <p
            style={{
              fontFamily: "DinProMediumItalic",
              fontSize: "7.11vh",
              color: "white",
              marginTop: "-13vh",
            }}
          >
            support us build it!
          </p>
          <img src={separatore} style={{ marginTop: "4vh", width: "40%" }} />
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "5.43vh",
              color: "#31c652",
              margin: "2vh",
            }}
          >
            If You are Interested
          </p>
          <p
            style={{
              fontFamily: "DinPRONormale",
              fontSize: "4.15vh",
              color: "white",
              margin: "-3vh",
            }}
          >
            Join our{" "}
            <span
              style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}
            >
              {" "}
              <a href="https://discordapp.com/users/besteamenricocoviello">
                Discord
              </a>{" "}
            </span>
            or our
            <span
              style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}
            >
              {" "}
              <a href="http://t.me/@Enrico_Coviello" target="_blank">
                Telegram
              </a>{" "}
            </span>
            <br /> then enter{" "}
            <span style={{ fontFamily: "DinPROBold" }}>
              your pass to the future of virtual football
            </span>
            :
          </p>
          <div
            style={{
              marginTop: "5vh",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{
                width: "40vh",
                height: "4.5vh",
                fontSize: "3.08vh",
                borderRadius: "25px",
                border: "none",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              placeholder={"password"}
            ></input>
            <ButtonSignUp style={{ marginTop: "0.3vw" }} type={"submit"}>
              <TestoButton>OK</TestoButton>
            </ButtonSignUp>
          </div>
          <br /> <br />
          <br />
          <img src={bordo} style={{ width: "100%" }} />
        </BoxSupport>
        ;
        <div
          style={{
            margin: "-3vh",
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
            Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
            Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
            besteamgamesrl@legalmail.it
          </p>
        </div>
        <div style={{ marginTop: "3vh" }}>
          <LastFooter />
        </div>
      </>
    );
  else
    return (
      <>
        <BoxIscrizione />
        <BoxDescrizione />
        <button
          className={attivo ? " button-up" : "button-no"}
          onClick={topFunction}
        >
          <img className="button-image" src={freccia2} alt="arrow" />
        </button>
      </>
    );
};

export default LoginSwap;
