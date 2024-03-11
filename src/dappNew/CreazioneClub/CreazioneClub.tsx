import { flexbox } from "@mui/system";
import React, { useState } from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  TestoPiccolo,
} from "../Iscrizione/IscrizioneStyled";
import {
  ButtonLogo,
  CreazioneClubForm,
  InputClub,
  TestoLeftInput,
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
  const [name, setName] = useState("")
  const [twitterPage, setTwitterPage] = useState("")
  const [clubsName, setClubsName] = useState("")
  const [livePage, setLivePage] = useState("")
  const [logo, setLogo] = useState("")
  const [abbreviation, setAbbreviation] = useState("")
  const [clubColorOne, setClubColorOne] = useState("")
  const [clubColorTwo, setClubColorTwo] = useState("")
  const [trainingCenterName, setTrainingCenterName] = useState("")
  const [stadiumName, setStadiumName] = useState("")
  const [metaverseZone, setMetaverseZone] = useState("")
  const [start, setStart] = useState(false)
  const [firstStep, setFirstStep] = useState(false)
  const [secondStep, setSecondstep] = useState(true)




  const createam = () => {

    axios.post('http://localhost:8080/team/create', {
      name: name,
      twitterPage: twitterPage,
      clubsName: clubsName,
      livePage: livePage,
      logo: logo,
      abbreviation: abbreviation,
      clubColorOne: clubColorOne,
      clubColorTwo: clubColorTwo,
      trainingCenterName: trainingCenterName,
      stadiumName: stadiumName,
      metaverseZone: metaverseZone
    },
      {
        headers: {

          'bt-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyV2FsbGV0Q29kZSI6ImNjY2NjY2MiLCJ1c2VyUm9sZSI6Ik1BTkFHRVIiLCJleHAiOjE3MDI2NTkzOTgsInVzZXJJZCI6MTQsInVzZXJuYW1lIjoiYXNkc2FkIn0.NqlY9MGM_dFkrzkWJhHHnooU0_TcibrdTQH5wq24Two'
        }
      })
  }

  if (!!start) return (

    <div style={{ backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <HeaderDapp />
      <LeftMenu />

      {(!!firstStep) &&
         <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ width: '40.069vw', height: '37.5vw', display: 'flex', flexDirection: 'column', backgroundColor: '#141414', padding: '4.514vw' }}>
           <TestoLeftInput>Logo</TestoLeftInput>
           <div style={{ width: '31.042vw', height: '15.486vw', backgroundColor: 'white' }}>
 
           </div>
           <TestoLeftInput>Shape</TestoLeftInput>
           <div style={{ width: '31.042vw', height: '6.215vw', backgroundColor: 'white' }}>
 
           </div>
           <div style={{ display: 'flex', flexDirection: 'row' }}>
             <TestoLeftInput>Main color</TestoLeftInput>
             <TestoLeftInput>Secondary color</TestoLeftInput>
           </div>
 
         </div>
         <div style={{ width: '40.069vw', height: '37.5vw', display: 'flex', flexDirection: 'column', backgroundColor: '#141414', justifyContent: 'center', alignContent: 'center' , alignItems:'center',gap:'1.217vw'}}>
 
 
           <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5vw', justifyContent: 'center'}}>
             <div style={{display:'flex', flexDirection:'column', gap :'0.519vw'}}>
               <TestoLeftInput>Team name</TestoLeftInput>
               <InputClub style={{ width: '21.875vw' }} onChange={(e) => setName(e.target.value)} />
             </div>
             <div>
               <TestoLeftInput>abbreviation</TestoLeftInput>
               <InputClub style={{ width: '12.135vw' }} onChange={(e) => setAbbreviation(e.target.value)} />
             </div>
 
           </div>
           <TestoLeftInput>Clubs Name</TestoLeftInput>
           <InputClub onChange={(e) => setClubsName(e.target.value)} />
           <div><TestoLeftInput>HUB Name</TestoLeftInput>
 
             <InputClub onChange={(e) => setStadiumName(e.target.value)} />
           </div>
 
           <div>
             <TestoLeftInput>Stadium Name</TestoLeftInput>
 
             <InputClub onChange={(e) => setTwitterPage(e.target.value)} />
           </div>
           <div>
 
             <div>
               <TestoLeftInput>Main Social Page</TestoLeftInput>
               <InputClub onChange={(e) => setLivePage(e.target.value)} />
             </div>
 
 
 
             <div><TestoLeftInput>Official Live Page</TestoLeftInput>
 
               <InputClub onChange={(e) => setMetaverseZone(e.target.value)} />
             </div>
 
 
           </div>
         </div>
       </div>}

      {(!!secondStep) &&
         <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{width:'83.33vw',height:'37.5vw', backgroundColor:'#141414'}}></div>
      </div>
      }



      
     


    </div>
  );
  else return (
    <div style={{ backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', height: '100%' }}>

      <HeaderDapp />
      <LeftMenu />
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', marginTop: '2.208vw' }}>
          <div style={{ width: '40.069vw', height: '37.5vw', backgroundImage: `url(${joinTeam})`, backgroundSize: 'contain' }}>

          </div>
          <div onClick={() => setStart(true)} style={{ width: '40.069vw', height: '37.5vw', backgroundImage: `url(${createTeam})`, backgroundSize: 'contain' }}>
          </div>

        </div>
      </div>
    </div>
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
          <p>*TWITTER PAGE</p>

          <InputClub onChange={(e)=>setTwitterPage(e.target.value)} />
        </div>
        <div>
          <p>*CLUBS NAME</p>

          <InputClub onChange={(e)=>setClubsName(e.target.value)} />
        </div>
      
        <div>
          <p>*LIVE PAGE</p>
          <InputClub onChange={(e)=>setLivePage(e.target.value)}/>
        </div>
        <div><p>*logo</p>

<InputClub onChange={(e)=>setLogo(e.target.value)} />
        </div>
        <div><p>*ABBREVATION</p>

<InputClub onChange={(e)=>setAbbreviation(e.target.value)} />
        </div>
        <div><p>*COLOR ONE</p>

<InputClub onChange={(e)=>setClubColorOne(e.target.value)} />
        </div>
        <div><p>*COLOR TWO</p>

<InputClub onChange={(e)=>setClubColorTwo(e.target.value)} />
        </div>
        <div><p>*Traing center NAME</p>

<InputClub onChange={(e)=>setTrainingCenterName(e.target.value)} />
        </div>
        <div><p>*Stadium NAME</p>

<InputClub onChange={(e)=>setStadiumName(e.target.value)} />
        </div>
        <div><p>*Metaversezone NAME</p>

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