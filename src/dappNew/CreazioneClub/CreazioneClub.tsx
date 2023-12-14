import { flexbox } from "@mui/system";
import React, { useState } from "react";
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
import { Height } from "@material-ui/icons";
import axios from "axios";

const CreazioneClub = () => {
  const [name,setName]=useState("")
  const [twitterPage, setTwitterPage]=useState("")
  const [clubsName, setClubsName]=useState("")
  const [livePage, setLivePage]=useState("")
  const [logo, setLogo]=useState("")
  const [abbreviation, setAbbreviation]=useState("")
  const [clubColorOne, setClubColorOne]=useState("")
  const [clubColorTwo, setClubColorTwo]=useState("")
  const [trainingCenterName, setTrainingCenterName]=useState("")
  const [stadiumName, setStadiumName]=useState("")
  const [metaverseZone, setMetaverseZone]=useState("")


  const createam = () => {
    axios.post('http://51.158.103.51:8080/club/create', {
      name:name,
      twitterPage:twitterPage,
      clubsName:clubsName,
      livePage:livePage,
      logo:logo,
      abbreviation:abbreviation,
      clubColorOne:clubColorOne,
      clubColorTwo:clubColorTwo,
      trainingCenterName:trainingCenterName,
      stadiumName:stadiumName,
      metaverseZone:metaverseZone
    },
    {
      headers: {
       
        'Token': 'Bearer your_token_here'
      }
  })
}
  return (
    <Container >
      <CreazioneClubForm style={{backgroundColor:'#dfe5e1'}}>
        <div>
          <TestoIscrizione>*NOME TEAM</TestoIscrizione>

          <InputClub onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <TestoIscrizione>*TWITTER PAGE</TestoIscrizione>

          <InputClub onChange={(e)=>setTwitterPage(e.target.value)} />
        </div>
        <div>
          <TestoIscrizione>*CLUBS NAME</TestoIscrizione>

          <InputClub onChange={(e)=>setClubsName(e.target.value)} />
        </div>
      
        <div>
          <TestoIscrizione>*LIVE PAGE</TestoIscrizione>
          <InputClub onChange={(e)=>setLivePage(e.target.value)}/>
        </div>
        <div><TestoIscrizione>*logo</TestoIscrizione>

<InputClub onChange={(e)=>setLogo(e.target.value)} />
        </div>
        <div><TestoIscrizione>*ABBREVATION</TestoIscrizione>

<InputClub onChange={(e)=>setAbbreviation(e.target.value)} />
        </div>
        <div><TestoIscrizione>*COLOR ONE</TestoIscrizione>

<InputClub onChange={(e)=>setClubColorOne(e.target.value)} />
        </div>
        <div><TestoIscrizione>*COLOR TWO</TestoIscrizione>

<InputClub onChange={(e)=>setClubColorTwo(e.target.value)} />
        </div>
        <div><TestoIscrizione>*Traing center NAME</TestoIscrizione>

<InputClub onChange={(e)=>setTrainingCenterName(e.target.value)} />
        </div>
        <div><TestoIscrizione>*Stadium NAME</TestoIscrizione>

<InputClub onChange={(e)=>setStadiumName(e.target.value)} />
        </div>
        <div><TestoIscrizione>*Metaversezone NAME</TestoIscrizione>

<InputClub onChange={(e)=>setMetaverseZone(e.target.value)} />
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

          <ButtonIscrizione onClick={()=>{createam()}}>AVANTI</ButtonIscrizione>
        </div>
      </CreazioneClubForm>
    </Container>
  );
};

export default CreazioneClub;
