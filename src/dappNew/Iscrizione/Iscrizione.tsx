import React from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  FormIscrizione,
  InputIscrizione,
  TestoIscrizione,
  TestoPiccolo,
} from "./IscrizioneStyled";

const Iscrizione = () => {
  return (
    <Container>
      <FormIscrizione>
        <div>
          <TestoIscrizione>*METAMASK</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>*NICKNAME</TestoIscrizione>
          <InputIscrizione />
        </div>
        <div>
          <TestoIscrizione>*DISCORD</TestoIscrizione>

          <InputIscrizione />
        </div>
        <TestoPiccolo>* SONO CAMPI OBBLIGATORI </TestoPiccolo>
        <ButtonIscrizione>AVANTI</ButtonIscrizione>
      </FormIscrizione>
    </Container>
  );
};

export default Iscrizione;
