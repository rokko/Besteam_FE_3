import React from "react";
import { LeftMenuContainer } from "./LeftMenuStyled";
import iconaNotifica from './iconaNotifica.png'
import locker from './locker.png'
import btem from './btem.png'
import matic from './matic.png'
import settings from './settings.png'
import exit from './exit.png'
const LeftMenu = () => {
  return (
  <LeftMenuContainer>
      <div style={{position:'absolute',top:'5vw',}}>
     
     <p>Back</p>
     </div>
    <div style={{width:'100%',position:'absolute',bottom:'8vw',display:'flex', flexDirection:'column',gap:'2rem', alignContent:'center', alignItems:'center',justifyContent:'center'}}>
    
    
    
    <img style={{width:'2.552vw', height:'1.771vw'}}src={iconaNotifica} alt='iconaNotifica' />
    <img style={{width: '2.604vw', height: '3.125vw'}} src={locker} alt='locker' />
    <img  style={{width: '2.083vw', height: '2.083vw'}} src={btem} alt='locker' />
    <img  style={{width: '2.083vw', height: '2.083vw'}} src={matic} alt='locker' />
    <img style={{width: '2.083vw', height: '2.083vw'}} src={settings} alt="settings" />
    <img style={{width: '2.39vw', height: '2.39vw'}} src={exit} alt="exit" />
    </div>



    
           
  </LeftMenuContainer>)
};

export default LeftMenu;


/*
 <img
            style={{width: '2.29vw', height: '2.39vw'}}
              alt="Simbolo exit"
              src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/simbolo-exit@1x.png"
            />
            <img
            style={{width: '2.08vw', height: '2.08vw'}}
            alt="Simbolo impostazioni"
              src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/simbolo-impostazioni@1x.png"
            />
            <div className="valuta-MATIC">
              <div className="overlap-group-3">
                <div className="text-wrapper-3">0.00</div>
                <div className="text-wrapper-4">MATIC</div>
              </div>
              <img
            style={{width: '2.08vw', height: '2.08vw'}}
            alt="Simbolo MATIC"
                src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/simbolo-matic@1x.png"
              />
            </div>
            <div className="valuta-BTEM">
              <div className="overlap-group-3">
                <div className="text-wrapper-3">0.00</div>
                <div className="text-wrapper-4">BTEM</div>
              </div>
              <img
            style={{width: '2.08vw', height: '2.08vw'}}
            alt="Simbolo BTEM"
                src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/simbolo-btem@1x.png"
              />
            </div>
            <div className="bottone-BACK">
              <div className="overlap-2">
                <div className="bottone-BACK-2" />
                <div className="text-wrapper-5">BACK</div>
                <img
                  className="linea"
                  alt="Linea"
                  src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/linea-1@1x.png"
                />
              </div>
            </div>
            <div className="armadietto-NFT">
              <div  style={{width: '2.604vw', height: '3.125vw', display:'flex', flexDirection:'row'}}
>
                <img
                  className="tracciato"
                  alt="Tracciato"
                  src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/tracciato-14@1x.png"
                />
                <img
                  className="tracciato-2"
                  alt="Tracciato"
                  src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/tracciato-15@1x.png"
                />
              </div>
              <div className="text-wrapper-6">LOCKER</div>
            </div>
            <div className="simbolo-NOTIFICHE">
              <div className="overlap-3">
               
                
              </div>
              <div className="text-wrapper-8">DM</div>
            </div>*/