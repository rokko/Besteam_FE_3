import React from "react";
import { ButtonConnessioneDapp, HeaderContainerDapp } from "./HeaderDappStyled";
import { TestoButton } from "../../Screens/btemSwap/boxIscrizione/BoxIscrizioneStyled";
const HeaderDapp = () => {
  return (
    <>
      <HeaderContainerDapp>
            
      
              <div className="bottone-support">
                <div className="overlap-group-5">
                  <img
                    className="tracciato-6"
                    alt="Tracciato"
                    src="https://cdn.animaapp.com/projects/65a160879aa2a391615fe61e/releases/65a163c8b74d79d9e9bb466d/img/tracciato-20@1x.png"
                  />
                  <div className="text-wrapper-9">?</div>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'row'}} className="testi-bottoni">
                <div className="text-wrapper-10">NFT</div>
                <div className="text-wrapper-11">METAVERSE</div>
                <div className="text-wrapper-12">MARKET</div>
                <div className="text-wrapper-13">EVENTS</div>
                <div className="text-wrapper-14">PLAYER</div>
                <div className="text-wrapper-15">TEAM</div>
              </div>
            
          
      </HeaderContainerDapp>
    </>
  );
};

export default HeaderDapp;
