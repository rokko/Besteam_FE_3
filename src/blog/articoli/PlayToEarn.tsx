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
  
  @media (min-width: 768px) {
   
  }
  
  @media (min-width: 1024px) {
   
  }
`;

const AuthorDate = styled.div`
font-family: Dinproregular;
font-weight: 400;
font-size: 20px;

text-align: center;

  color: #BFBFBFBD;
  margin-top:72px;
  margin-bottom: 72px;
  
  @media (min-width: 768px) {
  
  }
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

const GreenText = styled.span`
  color: #2ecc71;
  font-weight: bold;
`;

// New components for the content sections
const MetaverseSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 450px; /* Altezza minima uguale per entrambe le sezioni */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; /* Stessa altezza per le due sezioni */
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
  
  @media (min-width: 768px) {
   
  }
`;

const SectionText = styled.p`
font-family: Dinproregular;
font-weight: 400;
font-size: 24px;
color:#ffffff;
vertical-align: middle;

  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
   
  }
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
  min-height: 450px; /* Altezza minima uguale per entrambe le sezioni */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; /* Stessa altezza per le due sezioni */
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
  
  @media (min-width: 768px) {
   
  }
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

const TitlePreArticoli = styled.p``

const LeftButton = styled(SliderButton)`
  left: 10px;
  margin-top:105px;
`;

const RightButton = styled(SliderButton)`
  right: 10px;
   margin-top:105px;
`;


const PlayToEarn = () => {
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
            alt="Play-to-Earn nei Videogiochi"
          />
        </ImageContainer>

        <ContentContainer>
          <Title>
            Play-to-Earn nei Videogiochi: Il Futuro del Gaming con Besteam<br />
          </Title>

          <AuthorDate>
            Besteam | 10/03/25
          </AuthorDate>

          <CategoriesContainer>
            <Category>Game Design</Category>
          </CategoriesContainer>

          {/* Testo introduttivo */}
          <IntroText>
            Negli ultimi anni, il settore videoludico ha subito un’importante trasformazione grazie al modello Play-to-Earn (P2E), un concetto che rivoluziona l’idea tradizionale di gioco.

            Mentre i videogiochi classici si basano su un modello economico in cui i giocatori spendono denaro senza poterlo recuperare, il P2E introduce un sistema in cui è possibile ottenere ricompense digitali mentre si gioca.
          </IntroText>

          {/* First section */}
          <MetaverseSection>
            <MetaverseImageContainer>
              <Image
                src={manchestercity}
                alt="Cos’è il Play-to-Earn?"
              />
            </MetaverseImageContainer>

            <MetaverseContent>
              <SectionTitle>Cos’è il Play-to-Earn?</SectionTitle>
              <SectionText>
                Il modello Play-to-Earn è una modalità innovativa che permette ai giocatori di ottenere ricompense reali attraverso la partecipazione attiva nel gioco.
                Queste ricompense possono assumere diverse forme, tra cui asset digitali, NFT (token non fungibili) o altre risorse dal valore economico.
                L’elemento chiave è la proprietà digitale degli oggetti ottenuti nel gioco, che possono essere scambiati, venduti o utilizzati per generare ulteriore valore.
                <br /><br />
                A differenza dei giochi tradizionali, dove gli oggetti e le valute rimangono confinati all’interno dell’ecosistema di gioco e spesso vengono persi nel momento in cui si smette di giocare, i giochi P2E garantiscono agli utenti un’opportunità di ottenere asset digitali per il tempo e l’impegno investito.
              </SectionText>
            </MetaverseContent>
          </MetaverseSection>

          {/* Second section */}
          <BesteamSection>
            <BesteamContent>
              <SectionTitle>Esempi di Giochi Play-to-Earn</SectionTitle>
              <SectionText>
                Diversi giochi hanno già adottato il modello Play-to-Earn, ottenendo grande successo nel settore. Alcuni esempi:
                <br /> - <strong>Axie Infinity</strong>: uno dei giochi P2E più famosi, in cui i giocatori allevano, combattono e scambiano creature digitali chiamate Axie, ottenendo ricompense digitali.
                <br /> - <strong>Decentraland</strong>: un metaverso basato su blockchain dove gli utenti possono acquistare, vendere e monetizzare terreni virtuali e asset digitali.
                <br /> - <strong>The Sandbox</strong>: un mondo virtuale in cui i giocatori possono creare, possedere e monetizzare esperienze di gioco grazie agli NFT.
                <br /><br />
                Questi giochi dimostrano come il Play-to-Earn possa trasformare il modo in cui i giocatori interagiscono con i videogiochi, offrendo un’opportunità di ottenere valore reale dagli asset digitali.
              </SectionText>
            </BesteamContent>

            <BesteamImageContainer>
              <Image
                src={besteamfirst}
                alt="Esempi P2E"
              />
            </BesteamImageContainer>
          </BesteamSection>

          {/* Third section (Besteam Adoption) - Adding another section for this specific text block */}
          <MetaverseSection>
            <MetaverseImageContainer>
              {/* Reusing existing image as placeholder */}
              <Image
                src={seriea}
                alt="Besteam P2E"
              />
            </MetaverseImageContainer>
            <MetaverseContent>
              <SectionTitle>L’adozione del Play-to-Earn da parte di Besteam</SectionTitle>
              <SectionText>
                Besteam ha deciso di abbracciare completamente questa filosofia, creando un ecosistema in cui il divertimento si unisce a opportunità economiche concrete.
                Attraverso un’infrastruttura basata su blockchain, Besteam consentirà ai giocatori di possedere realmente gli asset digitali ottenuti, offrendo loro un’esperienza di gioco coinvolgente e redditizia.
                <br /><br />
                <strong>I punti di forza principali di Besteam includono:</strong>
                <br /> - <strong>Monetizzazione delle Abilità:</strong> i giocatori potranno ottenere ricompense sotto forma di NFT o asset digitali in base alla loro bravura e al tempo investito.
                <br /> - <strong>Mercato Aperto:</strong> gli asset guadagnati saranno liberamente scambiabili su marketplace dedicati, dando valore reale ai progressi nel gioco.
                <br /> - <strong>Sicurezza e Trasparenza:</strong> grazie alla tecnologia blockchain, ogni transazione e ogni oggetto posseduto saranno certificati e verificabili, garantendo un ambiente di gioco equo e privo di frodi.
                <br /> - <strong>Accessibilità Democratizzata:</strong> chiunque potrà accedere e beneficiare del sistema Play-to-Earn, senza limitazioni imposte dai modelli di business tradizionali.
              </SectionText>
            </MetaverseContent>
          </MetaverseSection>

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
          <SliderTextContainer style={{ marginTop: '104px' }}>
            <SectionTitle>Il Futuro del Gaming è Play-to-Earn
            </SectionTitle>
            Il Play-to-Earn rappresenta una delle più grandi evoluzioni nel mondo dei videogiochi, offrendo ai giocatori nuove possibilità di coinvolgimento e di ottenere valore economico dagli asset digitali. Con l’avvento della blockchain e degli NFT, questa rivoluzione è solo all’inizio. Besteam si posiziona all’avanguardia di questa trasformazione, puntando a creare un’esperienza di gioco che sia non solo avvincente, ma anche economicamente vantaggiosa per la community.
          </SliderTextContainer>
        </ContentContainer>
        <img src={crociprima} />
        <SliderTextContainer style={{ marginTop: '104px', marginBottom: '104px' }}>

          Preparati a entrare in un nuovo mondo di gioco, dove il divertimento si unisce alla possibilità di ottenere asset digitali con valore reale.

          <br />
          Con Besteam, il futuro del gaming è già qui.       </SliderTextContainer>
        <div style={{ marginTop: '80px' }}>

          <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d' }}>
            <Title style={{ fontSize: '40px' }}>Articoli Correlati</Title>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', marginTop: '78px' }}>
              <CardArticolo link='/metaverso-calcistico' title="Cos'è il metaverso calcistico?" category="Innovation" />
              <CardArticolo link='/play-to-earn' title="Play-to-Earn nei Videogiochi" category="Game Design" />
              <CardArticolo link='/articolo-test' title="Test Article" category="Test" />
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
      </CardContainer >
    </div >
  );
};

export default PlayToEarn;
