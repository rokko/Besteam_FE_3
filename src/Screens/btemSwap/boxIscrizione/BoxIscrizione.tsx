import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  BoxDestra,
  BoxSinistra,
  BoxTop,
  ButtonSignUp,
  TestoForm,
  TestoButton,
  TestoSwap,
  InputFormRegistrazione,
  InputCoin,
  TestoSupporto,
  ContainerIscrizione,
  FrecciaBasso,
  BoxDestraScuro,
  Mandatory,
  TestoSottoInput,
  BuyButton,
} from "./BoxIscrizioneStyled";

import FrecciaVersoBasso from "../assets/img/frecciabasso.png";
import { object, ref, string } from "yup";
import { useWeb3React } from "@web3-react/core";
import lucchetto from "../../../components/video/lucchetto.png";
import fasciaverticale from "../../../components/video/fasciaverticalebtem.png";
import axios from "axios";
import simbBTEM from "../../../components/video/simbBtem.png";
import simbMATIC from "../../../components/video/simbMatic.png";
import frecciabasso from "../../../components/video/btemfrecciagiu.png";
import Modalico from "../../../components/preico/Modalico";
import abiBTEM from "../../../components/BtemSaleAbi.json";
import { RegisterPayload } from "./BoxIscrizioneType";
var Contract2 = require("web3-eth-contract");
const { Configuration, OpenAIApi } = require("openai");

const BoxIscrizione = () => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const SWAP_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiBTEM, SWAP_ADDRESS);
  const { account, library } = useWeb3React();
  console.log(account);
  const [utenteAttivo, setUtenteAttivo] = useState(false);

  const [refCodeExist, setRefCodeExist] = useState();

  const config = {
    headers: {
      Authorization: `Bearer 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`,
    },
  };

  useEffect(() => {
    if (!!account) {
      axios
        .get("http://51.158.113.131:8080/user/getByWallet", {
          params: { walletCode: account as any },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((e) => {
          if (!!e.data) setUtenteAttivo(true);
        });
    }
  }, [account]);

  const takeRef = async () => {
    const x = await contract.methods.getCodeByAddr(account).send({
      from: account,
    });
    console.log(x);
  };
  const compraBTEM = async () => {
    if (!refCodeExist) {
      const x = await contract.methods.buyTokensWithoutCode(account).send({
        from: account,
        value: library.utils.toWei(`${maticInv}`, "ether"),
      });
    } else {
      const x = await contract.methods
        .buyTokensWithCode(account, refCodeExist)
        .send({
          from: account,
          value: library.utils.toWei(`${maticInv}`, "ether"),
        });
    }
  };
  const initialValues = {
    nome: "",
    cognome: "",
    mail: "",
    wallet: "",
    refcode: "",
  };
  const [totbtem, setTotbtem] = useState(0);
  const [maticInv, setMaticInv] = useState(0);
  const [open, setOpen] = useState(false);

  const cambioValore = (v) => {
    setMaticInv(v.target.value);
    setTotbtem(v.target.value * 30);
  };
  const registrazione = (values) => {
    console.log(values);

    setRefCodeExist(values.refcode);

    const payload: RegisterPayload = {
      lastName: values.cognome,
      firstName: values.nome,
      userEmail: values.mail,
      walletCode: account as any,
    };

    console.log(payload);
    axios
      .post("http://51.158.113.131:8080/user/register", payload)
      .then((x) => console.log(x));
    setOpen(true);
  };

  return (
    <BoxTop>
      <Modalico open={open} setopen={setOpen} testo={4} />
      <ContainerIscrizione>
        <BoxSinistra>
          <img
            src={fasciaverticale}
            style={{
              position: "absolute",
              left: "-0.8vw",
              top: "-0.35vw",
              height: "35vw",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          />
          <Formik
            initialValues={initialValues}
            onSubmit={(values, formikHelper) => {
              registrazione(values);
            }}
            validationSchema={object({
              nome: string()
                .required("Inserisci il tuo Cognome")
                .min(2, "Cognome troppo corto"),
              cognome: string()
                .required("Inserisci il tuo nome")
                .min(2, "Nome troppo corto"),
              mail: string()
                .required("Inserisci la tua mail")
                .email("Email non valida"),
              wallet: string(),
              refcode: string(),
            })}
          >
            {({ handleChange, errors, isValid, touched, dirty, values }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginTop: "1rem",
                }}
              >
                <TestoForm>FIRST NAME*</TestoForm>
                <InputFormRegistrazione name="nome" onChange={handleChange} />
                <TestoForm>SECOND NAME*</TestoForm>
                <InputFormRegistrazione
                  name="cognome"
                  onChange={handleChange}
                />
                <TestoForm>EMAIL*</TestoForm>
                <InputFormRegistrazione name="mail" onChange={handleChange} />
                <TestoForm>WALLET*</TestoForm>
                <InputFormRegistrazione
                  name="wallet"
                  value={account as any}
                  onChange={handleChange}
                />
                <TestoForm>REF CODE</TestoForm>
                <InputFormRegistrazione
                  name="refcode"
                  onChange={handleChange}
                />
                <ButtonSignUp style={{ marginTop: "2rem" }} type={"submit"}>
                  <TestoButton>SEND</TestoButton>
                </ButtonSignUp>
                <Mandatory>*MANDATORY FIELD</Mandatory>
              </Form>
            )}
          </Formik>
        </BoxSinistra>

        <BoxDestra>
          {!utenteAttivo && (
            <img
              src={lucchetto}
              style={{
                width: "10vw",
                position: "absolute",
                top: "30%",
                right: "34%",
                zIndex: "3",
              }}
            />
          )}
          {!utenteAttivo && (
            <BoxDestra
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "#000000",
                opacity: 0.5,
              }}
            />
          )}

          <TestoSwap style={{ marginTop: "-0.1vw" }}>SWAP</TestoSwap>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              position: "relative",
              marginTop: "-2vw",
            }}
          >
            <img
              src={frecciabasso}
              style={{
                position: "absolute",
                width: "2.86vw",
                left: "14vw",
                top: "6.3vw",
              }}
            />

            <div style={{ position: "relative" }}>
              <InputCoin onChange={(x) => cambioValore(x)} />
              <img
                src={simbMATIC}
                style={{
                  width: "3.50vw",
                  position: "absolute",
                  left: "13.5vw",
                  top: "0.8vw",
                }}
              ></img>
              <TestoSottoInput
                style={{ position: "absolute", left: "7vw", top: "-0.6vw" }}
              >
                MATIC
              </TestoSottoInput>
            </div>
            <div style={{ position: "relative" }}>
              <InputCoin value={totbtem} readOnly={true} />
              <img
                src={simbBTEM}
                style={{
                  width: "3.50vw",
                  position: "absolute",
                  left: "13.5vw",
                  top: "0.8vw",
                }}
              ></img>
              <TestoSottoInput
                style={{ position: "absolute", left: "7vw", top: "-0.6vw" }}
              >
                BTEM
              </TestoSottoInput>
            </div>
          </div>
          <BuyButton onClick={() => compraBTEM()}>BUY</BuyButton>
        </BoxDestra>
      </ContainerIscrizione>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <TestoSupporto>REF CODE and TUTORIAL</TestoSupporto>
        <FrecciaBasso src={FrecciaVersoBasso} />
      </div>
    </BoxTop>
  );
};

export default BoxIscrizione;
