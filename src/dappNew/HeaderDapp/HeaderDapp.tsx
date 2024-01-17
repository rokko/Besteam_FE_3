import React from "react";
import { ButtonConnessioneDapp, HeaderContainerDapp } from "./HeaderDappStyled";
import { TestoButton } from "../../Screens/btemSwap/boxIscrizione/BoxIscrizioneStyled";
import logoBe from './logoBe.png'
import support from './support.png'
import { Link } from "react-router-dom";
const HeaderDapp = () => {
  return (
    <>
      <HeaderContainerDapp>
            
      
              <img src={logoBe} alt={'logoBe'} style={{width:'5.823vw', height:'4.823vw', alignContent:'center', justifyContent:'center',alignItems:'center',position:'fixed',left:'0vw'}} />
              <div style={{display:'flex', gap:'4rem',fontSize:'1.823vw', fontFamily:'Bonn', color:'white', position:'fixed',right:'2vw',justifyContent:'center',alignContent:'center',alignItems:'center'}} className="testi-bottoni">
                <div style={{backgroundColor:'#2DC653', width:'12.5vw', height:'2.94vw', display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <div className="text-wrapper-11">METAVERSE</div>
                </div>
                <div style={{backgroundColor:'#2DC653', width:'9.375vw',height:'2.94vw',display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <div className="text-wrapper-10">NFT</div></div>
               

                <div className="text-wrapper-13">EVENTS</div>
                <div className="text-wrapper-12">MARKET</div>
                <Link to='/dapp/creaclub'>
                <div className="text-wrapper-15">TEAM</div>
                </Link>
                <div className="text-wrapper-14">PLAYER</div>
                <img src={support} alt='supporto' style={{width:'3.125vw', height:'3.125vw'}} />

              </div>

            
          
      </HeaderContainerDapp>
    </>
  );
};

export default HeaderDapp;
