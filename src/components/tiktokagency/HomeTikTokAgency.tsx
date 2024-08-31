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
import discord from './media/discord 2.png'
import mail from './media/Frame 99.png'
import whatsapp from './media/—Pngtree—white whatsapp icon png_3562063 (1) 1.png'
import { Box, Button, Checkbox, FormControlLabel, Popover, Typography } from '@mui/material'

const HomeTikTok = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState(null);

  const [filtriAttivi, setFiltriAttivi] = useState<boolean>(false);



  const handleScrollToCreators = () => {
    const creatorsSection = document.getElementById('ourCreators');
    if (creatorsSection) {
      creatorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickFiltri = () => {
    setFiltriAttivi(!filtriAttivi);
  }

  const [selectedFilters, setSelectedFilters] = useState({
    relazioni: false,
    viaggi: false,
    shopping: false,
    educazione: false,
    cucina: false,
    fotografia: false,
    musica: false,
    ecologia: false,
  });

  const handleCardClick = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
  
    // Convertiamo il nome del filtro in minuscolo per uniformare la gestione dei nomi
    const lowerCaseName = name.toLowerCase();
  
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [lowerCaseName]: checked,
    }));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = creator.nome.toLowerCase().includes(searchTerm.toLowerCase());
  
    // Trova tutte le categorie che sono state selezionate
    const selectedCategories = Object.keys(selectedFilters)
      .filter((key) => selectedFilters[key]);
  
    // Verifica se il creator appartiene a una delle categorie selezionate
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some((category) => 
      creator.categorie.map(c => c.toLowerCase()).includes(category)
    );
  
    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <div className={'topLanding'}>
        <img className={'tiktoklogo'} src={TikTokAgencyLogo} />
        <p className='testoGrandeLanding'>
          WELCOME IN <br />
          BESTEAM TikTok Agency</p>
        <p className='testoPiccoloLanding'>meet our CREATORS and discover our CONTENT!</p>
        <img className='frecciaImmagine' src={freccia}  onClick={handleScrollToCreators}/>
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
        <p className='ourStaff' id='ourCreators'>OUR CREATORS</p>

        <div style={{ display: 'flex', flexDirection:'row',width:'100%',gap:'640px', justifyContent:'center', marginBottom:'30px' }}>
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
          <div>
            {filtriAttivi && (<button aria-describedby={id} style={{
              width: '200px',
              height: '90px',
              padding: '24px',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#192C1E',
              border: '1px solid #2DC653',
              color: '#2DC653',
              fontSize: '20px',
              fontWeight:'700',
            }} onClick={() => {
              handleFilterClick(event);
              handleClickFiltri();
            }}>
              SAVE
            </button>
            )}
            {!filtriAttivi && (
              <button aria-describedby={id} style={{
                width: '200px',
                height: '90px',
                padding: '24px',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#4E4E4E',
                color: '#A1A1A1',
                fontSize: '20px',
                fontWeight:'700',
              }} onClick={() => {
                handleFilterClick(event);
                handleClickFiltri();
              }}>
                + FILTERS
              </button>
            )}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Box sx={{ p: 2, backgroundColor: '#292929', color: 'white', minWidth: '800px', display: 'flex', flexDirection: 'column-reverse' }}>

              <FormControlLabel
      labelPlacement="start"
      label="Relazioni e Consigli di coppia"
      control={
        <Checkbox
          checked={selectedFilters.relazioni}
          onChange={handleFilterChange}
          name="Relazioni"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0', // Bordo grigio chiaro quando non selezionato
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42', // Sfondo verde quando selezionato
              stroke: 'black', // Spunta nera
              strokeWidth: 2, // Spessore della spunta
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42', // Cambia il bordo al passaggio del mouse quando non è selezionato
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Viaggi"
      control={
        <Checkbox
          checked={selectedFilters.viaggi}
          onChange={handleFilterChange}
          name="Viaggi"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Shopping"
      control={
        <Checkbox
          checked={selectedFilters.shopping}
          onChange={handleFilterChange}
          name="shopping"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Educazione e informazione"
      control={
        <Checkbox
          checked={selectedFilters.educazione}
          onChange={handleFilterChange}
          name="educazione"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Cucina"
      control={
        <Checkbox
          checked={selectedFilters.cucina}
          onChange={handleFilterChange}
          name="Cucina"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Fotografia e video"
      control={
        <Checkbox
          checked={selectedFilters.fotografia}
          onChange={handleFilterChange}
          name="fotografia"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Musica e canto"
      control={
        <Checkbox
          checked={selectedFilters.musica}
          onChange={handleFilterChange}
          name="Musica"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
    <FormControlLabel
      labelPlacement="start"
      label="Ecologia e sostenibilità"
      control={
        <Checkbox
          checked={selectedFilters.ecologia}
          onChange={handleFilterChange}
          name="ecologia"
          sx={{
            padding: '0 8px',
            color: 'white',
            '& .MuiSvgIcon-root': {
              fill: 'none',
              stroke: '#B0B0B0',
              strokeWidth: 1.5,
              borderRadius: '4px',
              width: '20px',
              height: '20px',
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: '#1F8F42',
              stroke: 'black',
              strokeWidth: 2,
            },
            '&:hover': {
              '& .MuiSvgIcon-root': {
                stroke: '#1F8F42',
              }
            }
          }}
        />
      }
      sx={{ 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '5px 0',
      }}
    />
              </Box>
            </Popover>
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

        <img style={{ marginTop: '91px', height: '40px', width: '40px', alignSelf: 'center' }} src={frecciaSu} onClick={handleScrollToCreators} />
        <p className='ourStaff'>CONTACT US</p>
        <div className="sectionContactUs">
          <div className='riga'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Communication / Mail">
                <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>

            <p className='testoContactUs2'> agency@besteam.io</p>
          </div>
          <a className='riga' href='https://discord.gg/besteam'>
            <img src={discord} style={{ height: '26px', width: '25px'}} />
            <p className='testoContactUs2'> https://discord.gg/besteam</p>
          </a>
          <a className='riga' href=' https://chat.whatsapp.com/DVEsaNrgU8JKH45c53DMbO'>


            <img src={whatsapp}  style={{ width: '32px', height: '32px' }} />
            <p className='testoContactUs2'>Community WhatsApp</p>
          </a>



        </div>
        <br/>
        <br/> <br/>
        <br/> <br/>
        <br/>

      </div>
      <img src={bordo} style={{ width: "100%", marginTop: '-30px' }} />
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