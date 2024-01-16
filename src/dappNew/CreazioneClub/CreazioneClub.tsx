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
import HeaderBar from "../../components/HeaderBar";
import { HeaderContainerDapp } from "../HeaderDapp/HeaderDappStyled";
import createTeam from '../media/createTeam.jpg'
import joinTeam from '../media/joinTeam.jpg'
import { HeaderDapp } from "../HeaderDapp";
import { LeftMenu } from "../LeftMenu";

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
  const [start,setStart] = useState(false)




  const createam = () => {
    
    axios.post('http://localhost:8080/team/create', {
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
       
        'bt-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyV2FsbGV0Q29kZSI6ImNjY2NjY2MiLCJ1c2VyUm9sZSI6Ik1BTkFHRVIiLCJleHAiOjE3MDI2NTkzOTgsInVzZXJJZCI6MTQsInVzZXJuYW1lIjoiYXNkc2FkIn0.NqlY9MGM_dFkrzkWJhHHnooU0_TcibrdTQH5wq24Two'
      }
  })
}

  if (!!start) return (
    < >
      <HeaderDapp/>
      <LeftMenu/>

      <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around', marginLeft:'3vw', marginTop:'6vw', backgroundColor:'grey'}}>
        <div style={{width:'42.708vw' , height:'44.271vw',display:'flex', flexDirection:'column' ,backgroundColor:'#141414'}}>
          <p>Logo</p>
          <p>Shape</p>
          <p>Main color</p>
          <p>Secondary color</p>

        </div>
        <div style={{width:'42.708vw' , height:'44.271vw',display:'flex', flexDirection:'column',backgroundColor:'#141414'}}>

        </div>
      </div>
      
     
    </>
  );
  else return(
    <>
    <HeaderDapp/>
    <LeftMenu/>
    <div style={{background:'grey', height:'100vh', justifyContent:'center', alignItems:'center', alignContent:'center', marginLeft:'8.250vw'}}>
    <div style={{display:'flex', flexDirection:'row', gap:'3rem',marginTop:'5.208vw'}}>
    <div style={{width:'42.708vw', height:'44.271vw', backgroundImage:`url(${joinTeam})`, backgroundSize:'contain'}}>
        
        </div>
      <div onClick={()=>setStart(true)} style={{width:'42.708vw', height:'44.271vw',backgroundImage:`url(${createTeam})`, backgroundSize:'contain'}}>
      </div>
     
    </div>
    </div>
    </>
  )
};

export default CreazioneClub;



/*
 <CreazioneClubForm style={{backgroundColor:'#dfe5e1'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
      </CreazioneClubForm>*/