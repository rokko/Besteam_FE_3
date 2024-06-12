import React, { useState } from 'react'
import './TikTokAgency.modules.css'
import TikTokAgencyLogo from './media/TikTokAgency.png'
import freccia from './media/Freccia.png'
import frecciaSu from './media/Frecciasu.png'
import bordo from "./media/bordo2.png";
import CardStaff from './components/CardStaff/CardStaff';
import { Staff } from './const/Staff'
import { creators } from './const/Creator';
import { StaffType } from './const/StaffType';
import { CreatorType } from './const/CreatorType';
import CardCreator from './components/CardCreator/CardCreator';

const HomeTikTok = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleCardClick = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = creator.nome.toLowerCase().includes(searchTerm.toLowerCase());
    //const matchesCategory = selectedCategory ? creator.category === selectedCategory : true;
    return matchesSearch;
  });

  return (
    <>
      <div className={'topLanding'}>
        <img className={'tiktoklogo'} src={TikTokAgencyLogo} />
        <p className='testoGrandeLanding'>
          WELCOME IN <br />
          BESTEAM TikTok Agency</p>
        <p className='testoPiccoloLanding'>meet our CREATORS and discover our CONTENT!</p>
        <img className='frecciaImmagine' src={freccia} />
      </div>
      <div className={'secondaParte'}>
        <p className='ourStaff'>OUR STAFF</p>
        <div className='listaCard'>
          {Staff.map((userStaff: StaffType) => {
            return (
              <CardStaff key={userStaff.id}
                userStaff={userStaff}
                isActive={userStaff.id === activeCardId}
                onClick={() => handleCardClick(userStaff.id)} />
            )

          })}

        </div>
        <p className='ourStaff'>OUR CREATORS</p>

        <div>
          <div className='searchAndFilter'>
            <div className='search-container'>
              <input placeholder='Search creators here..' className='inputStyle' onChange={(x) => setSearchTerm(x.target.value)}>

              </input>
              <div className="search-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 20L28 28M13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667Z"
                    stroke="#8E8E8E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className='filterButton'>
<p className='testoFiltri'>+ FILTERS</p>
            </div>
          </div>


          <div className='cardCreatorContainer'>
            {filteredCreators.map((userCreator: CreatorType) => {

              return (
                <CardCreator userCreator={userCreator}
                  isActive={userCreator.id === activeCardId}
                  onClick={() => handleCardClick(userCreator.id)} />
              )
            })}

          </div>

        </div>
        <img  style={{marginTop:'91px', height:'40px',width:'40px', alignSelf:'center'}} src={frecciaSu} />
        <p className='testoContactUs'>Contact Us</p>

      </div>
      <img src={bordo} style={{ width: "100%" }} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1C1C1C",
          color: "white",
          height: "100px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-2.1vh",
        }}
      >
        <p>
          Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
          Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
          besteamgamesrl@legalmail.it
        </p>
      </div>
    </>)
}


export default HomeTikTok