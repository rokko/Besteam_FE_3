import React from "react";
import styled from "styled-components";
import SfondoSupport from "../../../components/video/sfondoSupport.jpg";
import bordo from "../../../components/video/bordo2.png";
import { LastFooter } from "../../../components/LastFooter";
import separatore from "../../btemSwap/assets/img/separatore.png";

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
  return (
    <>
      <BoxSupport>
        <p
          style={{
            fontFamily: "DinPROBold",
            fontSize: "8.30vh",
            color: "#31c652",
            margin: "0",
          }}
        >
          if You are here
        </p>
        <p
          style={{
            fontFamily: "DinPROBold",
            fontSize: "11.86vh",
            color: "white",
            margin: "0",
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
            margin: "0",
          }}
        >
          support us build it!
        </p>
        <img src={separatore} />
        <p
          style={{
            fontFamily: "DinPROBold",
            fontSize: "5.43vh",
            color: "#31c652",
            margin: "0",
          }}
        >
          Contact us
        </p>
        <p
          style={{
            fontFamily: "DinPRONormale",
            fontSize: "4.15vh",
            color: "white",
            margin: "0",
          }}
        >
          Join our{" "}
          <span style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}>
            Discord
          </span>
          or our
          <span style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}>
            Telegram{" "}
          </span>
          <br /> then enter{" "}
          <span style={{ fontFamily: "DinPROBold" }}>
            your pass to the future of virtual football
          </span>
          :
        </p>
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
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br />
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
};

export default LoginSwap;
