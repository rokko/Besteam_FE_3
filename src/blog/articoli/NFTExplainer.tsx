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

// Styled Components
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

const MetaverseSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 450px; 

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; 
  }
`;

const MetaverseImageContainer = styled.div`
  width: 618px;
  height: 442px;
  position: relative;
  
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const MetaverseContent = styled.div`
  padding: 1.5rem 1rem;
  text-align:left;
  
  @media (min-width: 768px) {
    width: 60%;
    padding: 1.5rem 0;
  }
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
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
`;

const BesteamSection = styled.div`
  display: flex;
  margin-top:72px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 450px; 

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; 
  }
`;

const BesteamContent = styled.div`
  padding: 1.5rem 1rem;
  text-align:left;
  
  @media (min-width: 768px) {
    width: 50%;
    padding: 1.5rem 0;
  }
`;

const BesteamImageContainer = styled.div`
  width: 618px;
  height: 442px;
  position: relative;
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


const NFTExplainer = () => {
  // State for slider
  const images = [ronaldinho, argentina, seriea];

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
            alt="Cosa sono gli NFT?"
          />
        </ImageContainer>

        <ContentContainer>
          <Title>
            Cosa sono gli NFT? Esempi di successo<br />
          </Title>

          <AuthorDate>
            Besteam | 10/03/25
          </AuthorDate>

          <CategoriesContainer>
            <Category>Blockchain</Category>
          </CategoriesContainer>

          {/* Testo introduttivo */}
          <IntroText>
            Gli NFT (Non-Fungible Token) sono certificati digitali basati su tecnologia blockchain che attestano l’unicità e la proprietà di un asset digitale.
            Questi token hanno rivoluzionato diversi settori, come l’arte, il gaming e lo sport, grazie alla loro capacità di garantire autenticità, scarsità e trasferibilità.
          </IntroText>

          {/* First section */}
          <MetaverseSection>
            <MetaverseImageContainer>
              <Image
                src={seriea}
                alt="Esempi di successo"
              />
            </MetaverseImageContainer>

            <MetaverseContent>
              <SectionTitle>Esempi di progetti di successo</SectionTitle>
              <SectionText>
                <ul>
                  <li><strong>Sorare (Fantasy Football):</strong> permette agli utenti di collezionare, scambiare e usare carte di calciatori in un gioco di fantacalcio basato su prestazioni reali.</li>
                  <br />
                  <li><strong>NBA Top Shot:</strong> una piattaforma ufficiale NBA per la compravendita di momenti video iconici sotto forma di NFT.</li>
                  <br />
                  <li><strong>The Sandbox & Decentraland:</strong> mondi virtuali dove gli utenti acquistano terreni e asset digitali per personalizzare il loro spazio.</li>
                  <br />
                  <li><strong>Nike .SWOOSH & Adidas Into the Metaverse:</strong> NFT legati alla personalizzazione di abbigliamento digitale e fisico.</li>
                </ul>
                <br />
                Questi progetti dimostrano come gli NFT possano essere utilizzati non solo per il collezionismo, ma anche per offrire esperienze esclusive, personalizzazione e diritti digitali.
              </SectionText>
            </MetaverseContent>
          </MetaverseSection>

          {/* Second section */}
          <BesteamSection>
            <BesteamContent>
              <SectionTitle>Come Besteam utilizzerà gli NFT?</SectionTitle>
              <SectionText>
                Besteam sfrutterà gli NFT per offrire agli utenti nuove opportunità di personalizzazione ed esperienza nel mondo del calcio virtuale.
                <br /><br />
                Gli ambiti di utilizzo principali includono:
                <ul>
                  <li><strong>Outfit o Accessori estetici:</strong> maglie, pantaloni, scarpe, tatuaggi, acconciature o altri oggetti firmati, acquistabili come NFT o Possibilità di personalizzare il proprio avatar con elementi esclusivi e collezionabili.</li>
                  <br />
                  <li><strong>Gameplay:</strong> NFT che permettono agli utenti di ottenere vantaggi nel gioco, come abilità speciali, potenziamenti o accesso a funzionalità esclusive o Elementi di gioco limitati e rari che migliorano l’esperienza e la competitività.</li>
                  <br />
                  <li><strong>Contratti:</strong> Gestione dei contratti dei giocatori virtuali con i propri team tramite NFT, garantendo trasparenza e tracciabilità; o Possibilità di acquistare, vendere o scambiare contratti digitali in base alle performance nel gioco.</li>
                  <br />
                  <li><strong>Ticketing:</strong> Accesso a eventi speciali nel Metaverso, come partite esclusive, incontri con giocatori virtuali e esperienze premium; o NFT che fungono da biglietti digitali, verificabili su blockchain per evitare contraffazioni.</li>
                </ul>
              </SectionText>
            </BesteamContent>

            <BesteamImageContainer>
              <Image
                src={manchestercity}
                alt="Besteam NFT"
              />
            </BesteamImageContainer>
          </BesteamSection>


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

            Attraverso questi utilizzi, Besteam valorizza il concetto di proprietà digitale, offrendo un’esperienza innovativa e coinvolgente per gli utenti.
          </SliderTextContainer>
        </ContentContainer>
        <div style={{ marginTop: '80px' }}>

          <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d' }}>
            <Title style={{ fontSize: '40px' }}>Articoli Correlati</Title>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', marginTop: '78px' }}>
              <CardArticolo link='/metaverso-calcistico' title="Cos'è il metaverso calcistico?" category="Innovation" />
              <CardArticolo link='/play-to-earn' title="Play-to-Earn" category="Game Design" />
              <CardArticolo link='/cosa-sono-nft' title="Cosa sono gli NFT?" category="Blockchain" />
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

export default NFTExplainer;
