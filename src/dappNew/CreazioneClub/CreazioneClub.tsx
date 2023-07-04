import { flexbox } from "@mui/system";
import React from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  TestoIscrizione,
  TestoPiccolo,
} from "../Iscrizione/IscrizioneStyled";
import {
  ButtonLogo,
  CreazioneClubForm,
  InputClub,
} from "./CreazioneClubStyled";

const CreazioneClub = () => {
  return (
    <Container>
      <CreazioneClubForm>
        <div>
          <TestoIscrizione>*NOME TEAM</TestoIscrizione>

          <InputClub />
        </div>
        <div>
          <TestoIscrizione>*TWITTER PAGE</TestoIscrizione>

          <InputClub />
        </div>
        <div>
          <TestoIscrizione>*LIVE PAGE</TestoIscrizione>
          <InputClub />
        </div>
        <TestoPiccolo>*SONO CAMPI OBBLIGATORI</TestoPiccolo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <ButtonLogo>LOGO UPLOAD</ButtonLogo>

          <ButtonIscrizione>AVANTI</ButtonIscrizione>
        </div>
      </CreazioneClubForm>
    </Container>
  );
};

export default CreazioneClub;
