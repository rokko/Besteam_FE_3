import React, { useState } from 'react';
import styled from 'styled-components';
import besteamfirst from './media/test/besteamfirst.webp'
import manchestercity from './media/test/manchestercity.webp'
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';
import ronaldinho from './media/test/ronaldinho.webp'
import seriea from './media/test/seriaa.webp'
import argentina from './media/test/argentina.webp'
import crociprima from '../../components/video/crociprima.png'
import CardArticolo from '../components/CardArticolo';
import frecciaright from '../assets/frecciaright.png';

// Styled Components (Reused)
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  color: #2ecc71;
  font-family: sans-serif;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  
  @media (min-width: 768px) {
    height: 400px;
  }
  
  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const Title = styled.h1`
font-family: DINPro;
font-weight: 700;
font-size: 64px;
text-align: center;
vertical-align: middle;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const AuthorDate = styled.div`
font-family: Dinproregular;
font-weight: 400;
font-size: 20px;
text-align: center;
  color: #BFBFBFBD;
  margin-top:72px;
  margin-bottom: 72px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 42px;
  margin-bottom: 2rem;
`;

const Category = styled.div`
  background-color: #333;
  color: #424242;
  font-size: 16px;
  padding: 0.25rem 1rem;
  border-radius: 16px;
  width:202px;
  height:41px;
  font-family: Dinproregular;
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
color:#ffffff
`;

const IntroText = styled.div`
  text-align: center;
  padding: 0 1rem 1.5rem;
  margin-top:42px;
  color: #ffffff;
  font-family: Dinproregular;
  margin-bottom:72px;
font-weight: 400;
font-size: 24px;
text-align: center;
vertical-align: middle;
  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
  }
`;

const SectionContent = styled.div`
  padding: 1.5rem 1rem;
  text-align:left;
  width: 80%;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-family: DINPro;
font-weight: 700;
font-size: 36px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
  color: #2DC653;
  margin-bottom: 1rem;
`;

const SectionText = styled.div`
font-family: Dinproregular;
font-weight: 400;
font-size: 24px;
color:#ffffff;
vertical-align: middle;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
`;

// NEW Slider Components
const SliderContainer = styled.div`
  width: 1203px;
  height:384px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`;

const SliderImage = styled.img`
  width: 100%;
  display: block;
`;


const SliderTextContainer = styled.div`
 font-family: Dinproregular;
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color:#ffffff;
  
  @media (min-width: 768px) {
    padding: 2rem;
   font-size: 24px;;
  }
`;
const SliderWrapper = styled.div`
  display: flex;
  margin-top:105px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  padding: 10px 15px;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;


const LeftButton = styled(SliderButton)`
  left: 10px;
  margin-top:105px;
`;

const RightButton = styled(SliderButton)`
  right: 10px;
   margin-top:105px;
`;


const PresidentRole = () => {
    // State for slider
    const images = [manchestercity, besteamfirst, ronaldinho];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div style={{ backgroundColor: '#1C1C1C' }}>
            <CardContainer>
                <ImageContainer>
                    <Image
                        src={besteamfirst}
                        alt="Cosa fa un Presidente su Besteam?"
                    />
                </ImageContainer>

                <ContentContainer>
                    <Title>
                        Cosa fa un Presidente su Besteam?<br />
                    </Title>

                    <AuthorDate>
                        Besteam | 10/03/25
                    </AuthorDate>

                    <CategoriesContainer>
                        <Category>Management</Category>
                        <Category>Football</Category>
                    </CategoriesContainer>

                    {/* Testo introduttivo */}
                    <IntroText>
                        Scopri il ruolo chiave nel mondo virtuale del Footballverse.<br />
                        In Besteam, il Presidente non è solo un titolo di prestigio: è il cuore pulsante di una squadra virtuale, il suo fondatore, stratega e visionario. Il suo ruolo richiama da vicino quello di un vero presidente di club calcistico, ma con potenzialità estese dal metaverso. Ecco cosa significa essere Presidente su Besteam.
                    </IntroText>

                    {/* Sections */}
                    <SectionContent>
                        <SectionTitle>1. Creazione e Gestione del Team</SectionTitle>
                        <SectionText>
                            Tutto inizia con una visione. Come Presidente, puoi creare da zero la tua squadra, scegliendone nome, stemma, colori e identità visiva. Ma non finisce qui.
                            <br />La tua squadra avrà accesso a spazi esclusivi nel metaverso, i cosiddetti Team’s HUB: centri sportivi, stadi personalizzabili, aree per il merchandising, spazi per fan ed eventi.
                            <br />Inoltre, decidi le attività della squadra: allenamenti, amichevoli, tornei eSport, eventi pubblici nella BestCity... la tua creatività è il limite.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>2. Composizione e Reclutamento</SectionTitle>
                        <SectionText>
                            Una squadra è forte quanto le persone che la compongono. Il Presidente ha il compito di reclutare utenti reali per formare il proprio staff: giocatori, allenatori, direttori sportivi e altri ruoli chiave.
                            <br />Ogni avatar ha abilità uniche e potenzialità da sviluppare.
                            <br />Gestisci anche contratti virtuali e sponsorizzazioni, grazie a un sistema play-to-earn che premia l’attività e le performance nel gioco.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>3. Aspetti Manageriali e Strategici</SectionTitle>
                        <SectionText>
                            Essere Presidente significa anche occuparsi della parte “dietro le quinte”:
                            <br />• Gestione degli allenamenti e delle tattiche di gioco
                            <br />• Pianificazione del calendario gare
                            <br />• Crescita dell'immagine della squadra, dai social media agli eventi pubblici
                            <br />• Sviluppo di partnership, NFT, merchandising e fan engagement
                            <br />Un mix tra manager sportivo, imprenditore digitale e influencer.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>4. Partecipazione ai Tornei</SectionTitle>
                        <SectionText>
                            La competizione è al centro dell’esperienza su Besteam. Come Presidente, puoi iscrivere il tuo team a tornei eSport competitivi (11vs11, 5vs5, 3vs3) e seguire l’intero percorso, dalle formazioni alle strategie.
                            <br />Lavori fianco a fianco con allenatori e staff per ottenere prestazioni vincenti.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>5. Valore della Squadra e Monetizzazione</SectionTitle>
                        <SectionText>
                            Ogni vittoria, ogni fan, ogni asset digitale aumenta il valore reale della tua squadra.
                            <br />Grazie agli strumenti messi a disposizione dal sistema (NFT, trasferimenti, spazi virtuali), puoi:
                            <br />• Vendere giocatori
                            <br />• Stipulare accordi commerciali
                            <br />• Monetizzare premi e notorietà
                            <br />Una vera esperienza manageriale e imprenditoriale, in chiave gaming.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>6. Integrazione nel Metaverso – Il Footballverse</SectionTitle>
                        <SectionText>
                            La tua squadra non vive isolata: è parte attiva della BestCity, un universo digitale condiviso dove puoi:
                            <br />• Organizzare eventi e presentazioni
                            <br />• Socializzare con altri team e utenti
                            <br />• Interagire con sponsor, media e tifosi
                            <br />Un ecosistema connesso dove ogni azione conta e ogni relazione può fare la differenza.
                        </SectionText>
                    </SectionContent>


                    {/* NEW BE THE FIRST Slider with text below */}
                    <SliderContainer>
                        <LeftButton onClick={prevSlide}>‹</LeftButton>
                        <SliderWrapper currentSlide={currentSlide}>
                            {images.map((img, index) => (
                                <Slide key={index}>
                                    <SliderImage src={img} alt={`Slide ${index + 1}`} />
                                </Slide>
                            ))}
                        </SliderWrapper>
                        <RightButton onClick={nextSlide}>›</RightButton>
                    </SliderContainer>
                    <SliderTextContainer style={{ marginTop: '104px', marginBottom: '104px' }}>
                        <SectionTitle>In conclusione</SectionTitle>
                        Essere Presidente su Besteam non è solo un ruolo: è una sfida entusiasmante, una responsabilità creativa e strategica, e una nuova frontiera del calcio virtuale. Se hai sempre sognato di guidare un club tutto tuo, nel cuore di un metaverso innovativo, è il momento di scendere in campo.
                        <br /><br />
                        La tua squadra ti aspetta.
                    </SliderTextContainer>
                    <div style={{ marginTop: '80px' }}>

                        <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d' }}>
                            <Title style={{ fontSize: '40px' }}>Articoli Correlati</Title>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', marginTop: '78px' }}>
                                <CardArticolo link='/cosa-sono-nft' />
                                <CardArticolo link='/carriera-virtuale' />
                                <CardArticolo link='/ruolo-presidente' />
                            </div>
                            <div className="paginationControls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '55px' }}>
                                {Array.from({ length: 3 }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => console.log('prova')}
                                        style={{
                                            fontWeight: '500',
                                            color: 1 === i ? '#2DC653' : 'white',
                                            fontFamily: 'DinPRO',
                                            fontSize: '24px',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button onClick={() => console.log('avanti')} disabled={false} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <img src={frecciaright} style={{ width: '18px', height: '25px' }} alt="Freccia Destra" />
                                </button>
                            </div>

                        </div>
                        <NewsLetter />
                        <Footer />
                    </div>
            </CardContainer>
        </div>
    );
};

export default PresidentRole;
