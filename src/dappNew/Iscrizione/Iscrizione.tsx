import React, { useEffect } from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  FormIscrizione,
  InputIscrizione,
  TestoIscrizione,
  TestoPiccolo,
} from "./IscrizioneStyled";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
interface CheckboxProps {
  classes: {
    root: string;
    label: string;
  };
}
import PC from '../media/pc.png'
import PS from '../media/ps.png'
import Xbox from '../media/xbx.png'

import barralaterale from '../media/cornice.png'
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import {makeStyles} from '@material-ui/core/styles'
import SelectBoxCustom from "./selectBox/SelectBoxCustom";
import { country_list, role_list } from "../utilis/utils";
import CustomRadioGroup from "./optionsCustom/OptionsCustom";
import CarouselWithSelect from "./carouselSelect/CarouselSelect";
import { Mandatory } from "../../Screens/btemSwap/boxIscrizione/BoxIscrizioneStyled";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
const useStyles  =makeStyles({
  checkbox: {
    color: 'green', // Change the color of the checkbox
    borderRadius:'100px',
    '&.Mui-checked': {
      color: '#0f0', // Change the color of the checked checkbox
    },
    "& .MuiSvgIcon-root": {
      fontSize: 30,
      borderRadius: '50%',
    }
  },

  label: {
    fontSize: 16, // Change the font size of the label
    fontWeight: 'bold', // Change the font weight of the label
  },
});
const Iscrizione = () => {


  const { account } = useWeb3React();
  const [avatar, setAvatar] = React.useState('')
  const [firstForm, setFirstForm]=React.useState(true)
  const [secondForm, setSecondForm]=React.useState(false)
  const [thirdForm, setThirdForm] = React.useState(false)
  const [walletAccount, setWalletAccount] = React.useState('')
  const [nickname, setNickname]=React.useState('')
  const [email, setEmail] = React.useState('');
  const [discord, setDiscord] = React.useState('');
  const [regolamento, setRegolamento] = React.useState(false);
  const [nationality,setNationality] =React.useState('Italy');
  const [place, setPlace] = React.useState('Italy')
  const [platform, setPlatform] = React.useState('')
  const [newsletter, setNewsletter] = React.useState(false); 
  const [platformAccount, setPlatformAccount] = React.useState('')
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [firstRole, setFirstRole] = React.useState('')
  const [secondRole, setSecondRole] = React.useState('')
  const classes = useStyles();

  const vaiUltimoStep = () => {
    if(nationality=='' || firstRole==''|| secondRole=='' ||platformAccount=='' || place=='' || platform=='' ){
      console.log('ERROR')
    }
    else{
      setThirdForm(true)
      setSecondForm(false)
    }
    
  }


  const registrati = () => {
    if(avatar==''){
      console.log('ERRORE')
    }
    else{
      const request ={
        walletCode: walletAccount ,
        nickname:nickname,
        discord:discord,
        email:email,
        nationality:nationality,
        playerLocation:place,
        platform:platform,
        consoleAccount:platformAccount,
        mainRole:firstRole,
        secondaryRole: secondRole,
        newsletterCheck: newsletter,
        avatarImg: avatar

      }
      axios.post('http://localhost:3001/register', request).then((x)=>{
        if( !!x ){

          console.log('REGISTRAZIONE EFFETTUATA')

        }else{
          console.error('ERRORE')
          console.log(x)
        }
      })
    }
  }
  const handleEmailChange = (event) => {
    const newEmail = event.target.value.replace(/\s/g, ''); // Rimuovi gli spazi

    setEmail(newEmail);
    // Verifica l'indirizzo email e imposta lo stato di validità
    setIsValidEmail(verificaEmail(newEmail));
  };

  const handleNickname = (event)=>{
    const newNickname = event.target.value.replace(/\s/g, ''); // Rimuovi gli spazi
    setNickname(newNickname)
  }

  const handleRegolamentoChange = (event) => {
    setRegolamento(event.target.checked);
  };


  const handleNewsletterChange = (event) => {
    console.log(event.target.checked)
    setNewsletter(event.target.checked);
  }

  const handlePlatformAccountChange = (event) => {
    const newPlatformAccount = event.target.value.replace(/\s/g, ''); // Rimuovi gli spazi
    console.log(newPlatformAccount)
    setPlatformAccount(newPlatformAccount)
  }

  const handleDiscordChange = (event)=>{
    const newDiscord = event.target.value.replace(/\s/g, ''); // Rimuovi gli spazi
    console.log(newDiscord)
    setDiscord(newDiscord)

  }

  const handleWalletChange = (event)=>{
    const newWallet = event.target.value.replace(/\s/g, ''); // Rimuovi gli spazi
    setWalletAccount(newWallet)
  }

  const verificaEmail = (email) => {
    // Definisci il pattern regex per un indirizzo email
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // Restituisci True se c'è un match, altrimenti False
    return pattern.test(email);
  };


  const vaiASecondoStep = () => {

    if(nickname.length<3 || !isValidEmail || !regolamento || discord.length<3 ){
      console.log('ERROR')
    }
    else{
      setFirstForm(false)
      setSecondForm(true)
    }
  
  }
  useEffect(()=>{
    const headerTop = document.getElementsByClassName("navbar-header")as unknown as HTMLElement[]
    const footer = document.getElementsByClassName("iub__us-widget") as unknown as HTMLElement[]
    headerTop[0].style.display='none'
    footer[0].style.display='none'
    if(account){
      setWalletAccount(account)
    }
   
  

  },[])

  useEffect(()=>{
    console.log(platform)
  },[platform])
  return (
    <Container>
      {firstForm &&
      <FormIscrizione>
        <img src={barralaterale} height='100%' style={{position:'absolute',left:'0px'}} alt='cornice'/>
        <img src={barralaterale} height='100%' style={{position:'absolute',right:'0px'}} alt='cornice'/>

        <div>
          <TestoIscrizione>NICKNAME*</TestoIscrizione>
          <InputIscrizione type="text" id='nickname' value={nickname}  onChange={handleNickname}/>
        </div>
        <div>
          <TestoIscrizione>EMAIL*</TestoIscrizione>
          <InputIscrizione
              type="email"
              id="emailInput"
              value={email}
              onChange={handleEmailChange}
          /> 
        </div>
        <div>
          <TestoIscrizione>WALLET*</TestoIscrizione>

          <InputIscrizione 
            type="text" 
            id="walletInput"
            value={walletAccount}
            onChange={handleWalletChange}
            />

        </div>
        <div>
          <TestoIscrizione>DISCORD*</TestoIscrizione>

          <InputIscrizione 
            type="text"
            id="discordInput"
            value={discord}
            onChange={handleDiscordChange}
            />
        </div>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'flex-start'}}>
        <FormControlLabel
          onChange={handleRegolamentoChange}
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label={<span style={{
            fontSize:'1.04vw',
            fontFamily:'Dinproregular',
            color:'#7C7C7C',
            textAlign: 'left',
            letterSpacing: '-0.21px',
          }}>
I accept the <a href='#' style={{textDecoration:'none', color:'#208B3A', fontFamily:'DinLightItalic',fontStyle:'italic'}}>Terms and conditions</a> and <a style={{textDecoration:'none', color:'#208B3A', fontFamily:'DinLightItalic', fontStyle:'italic'}} href="#">Privacy Policy.</a>          </span>}         />
        <FormControlLabel
          onChange={handleNewsletterChange}
          control={<Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} classes={{ root: classes.checkbox }} />}
          label={<span style={{
            fontSize:'1.04vw',
            fontFamily:'Dinproregular',
            color:'#7C7C7C',
            textAlign: 'left',
            letterSpacing: '-0.21px',
          }}>
            I agree to subscribe to Besteam newsletter.
          </span>} // Add your label here
        />
        </div>
        <ButtonIscrizione onClick={()=>{vaiASecondoStep()}}>NEXT</ButtonIscrizione>
        <Mandatory style={{fontStyle:'italic', marginTop:'-3vh'}}>*MANDATORY FIELD </Mandatory>
      

      </FormIscrizione>
}
      {secondForm &&  <FormIscrizione>
        <img src={barralaterale} height='100%' style={{position:'absolute',left:'0px'}} alt='cornice'/>
        <img src={barralaterale} height='100%' style={{position:'absolute',right:'0px'}} alt='cornice'/>
        <div>
          <TestoIscrizione>NATIONALITY*</TestoIscrizione>
          <SelectBoxCustom list={country_list} role={false} setNationality={setNationality} nationality={nationality}/>
        </div>
        <div>
          <TestoIscrizione>Where are you playing from?*</TestoIscrizione>
          <SelectBoxCustom list={country_list} role={false} setNationality={setPlace} nationality={place}/>
        </div>
        <div>
          <TestoIscrizione>PLATFORM ACCOUNT*</TestoIscrizione>
          <InputIscrizione type='text' value={platformAccount} id='platformAccount' onChange={handlePlatformAccountChange}/>
        </div>
        <div>
          <TestoIscrizione>PLATFORM*</TestoIscrizione>
        <CustomRadioGroup prima={Xbox} seconda={PC} terza={PS} terzovalore={'PS'} secondovalore={'PC'} primovalore={'XB'} platform={platform} setPlatform={setPlatform}/>
       
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'3rem'}}>
          <div>
          <TestoIscrizione>First Role?*</TestoIscrizione>
          <SelectBoxCustom list={role_list} role={true} setNationality={setFirstRole} nationality={firstRole}></SelectBoxCustom>
          </div>
          <div>
            <TestoIscrizione>Second Role?*</TestoIscrizione>
            <SelectBoxCustom list={role_list} role={true} setNationality={setSecondRole} nationality={secondRole}></SelectBoxCustom>

          </div>
        </div>
        
        <ButtonIscrizione onClick={()=>{vaiUltimoStep()}}>SEND</ButtonIscrizione>
        <Mandatory style={{fontStyle:'italic', marginTop:'-3vh'}}>*MANDATORY FIELD </Mandatory>
      

      </FormIscrizione>
}
{thirdForm && <>
<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'100%', gap:'1.5rem', marginTop:'2rem'}}>
  <p style={{fontSize:'33px', color:'white', fontFamily:'DinPROBold'}}>CHOOSE YOUR AVATAR</p>
  <FormControl component="fieldset">
  <RadioGroup
    aria-label="gender"
    name="gender"
    value={avatar}
    onChange={(e) => setAvatar(e.target.value)}
    style={{display:'flex', flexDirection:'row', color:'white', fontSize:'30px', fontFamily:'DinPROBold', fontWeight:'bold'}}
  >
    <FormControlLabel value="uomo" control={<Radio />} label="Uomo" />
    <FormControlLabel value="donna" control={<Radio />} label="Donna" />
  </RadioGroup>
</FormControl>
  <div onClick={()=>{registrati()}} style={{width:'13.18vw', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'2.60vw', background:' #2DC653 0% 0% no-repeat padding-box'}}>
    <p style={{fontSize:'2.08vw', fontFamily:'DinPROBlack2', color:'white'}}>CREATE</p>
  </div>
  <p style={{ fontSize: '1.6vw', fontFamily:'DinLightItalic', color: '#ffffff',fontStyle:'italic'}}>
  and <span style={{color:'#2DC653'}}>JOIN</span> Besteam Metaverse!
  </p>
  </div>

</>} 
    </Container>
  );

};

export default Iscrizione;
