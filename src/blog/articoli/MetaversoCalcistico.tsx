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


const MetaversoCalcistico = () => {
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
                        alt="Metaverso Calcistico"
                    />
                </ImageContainer>

                <ContentContainer>
                    <Title>
                        Cos'è il metaverso calcistico? <br />
                    </Title>

                    <AuthorDate>
                        Besteam | 10/03/25
                    </AuthorDate>

                    <CategoriesContainer>
                        <Category>Innovation</Category>
                        <Category>Technology</Category>
                        <Category>Future</Category>
                    </CategoriesContainer>

                    {/* Testo introduttivo */}
                    <IntroText>
                        Negli ultimi anni, il concetto di metaverso ha rivoluzionato diversi settori, compreso il mondo del calcio. Non si tratta solo di un’innovazione tecnologica, ma di un’opportunità straordinaria per i tifosi e per i club. Ma cosa significa esattamente "metaverso calcistico" e quali possibilità offre? Scopriamolo insieme.
                    </IntroText>

                    {/* First section: Un nuovo modo di vivere il calcio */}
                    <MetaverseSection>
                        <MetaverseImageContainer>
                            <Image
                                src={manchestercity}
                                alt="Un nuovo modo di vivere il calcio"
                            />
                        </MetaverseImageContainer>

                        <MetaverseContent>
                            <SectionTitle>Un nuovo modo di vivere il calcio</SectionTitle>
                            <SectionText>
                                Il metaverso calcistico è un ambiente virtuale in cui i fan possono interagire con la loro squadra del cuore, vivere esperienze immersive e partecipare attivamente al mondo del calcio, tutto senza doversi muovere da casa. Grazie a tecnologie come la realtà virtuale (VR), la blockchain e gli NFT, il calcio entra in una nuova dimensione, dove i limiti fisici spariscono. Club come il Manchester City hanno già iniziato a costruire il proprio stadio nel metaverso, permettendo ai tifosi di assistere alle partite in un ambiente digitale interattivo.
                            </SectionText>
                        </MetaverseContent>
                    </MetaverseSection>

                    {/* Second section: Giocare, guadagnare e socializzare */}
                    <BesteamSection>
                        <BesteamContent>
                            <SectionTitle>Giocare, guadagnare e socializzare</SectionTitle>
                            <SectionText>
                                Nel metaverso calcistico, gli utenti non si limitano a guardare le partite, ma possono anche giocare e competere in modalità di gioco innovative. Piattaforme come Besteam offrono una simulazione calcistica play-to-earn, in cui ogni giocatore possiede un avatar personalizzabile, crea la propria squadra e partecipa a tornei per ottenere premi in criptovalute. Inoltre, i tifosi possono acquistare e vendere asset digitali come divise personalizzabili, stadi virtuali e oggetti esclusivi sotto forma di NFT, rendendo il calcio virtuale un’esperienza unica e coinvolgente.
                            </SectionText>
                        </BesteamContent>

                        <BesteamImageContainer>
                            <Image
                                src={besteamfirst}
                                alt="Giocare, guadagnare e socializzare"
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
                    <SliderTextContainer style={{ marginTop: '104px' }}>
                        <SectionTitle>Il futuro del calcio nel metaverso
                        </SectionTitle>
                        L’espansione del metaverso calcistico non riguarda solo il gaming, ma anche la trasformazione del concetto di tifoso digitale e di esperienza sportiva immersiva. Le società calcistiche possono monetizzare nuovi aspetti del club, i giocatori possono interagire direttamente con i fan e le partite potrebbero essere trasmesse in modi mai visti prima. In un futuro non troppo lontano, potremmo persino vedere eventi esclusivi nel metaverso, conferenze stampa virtuali e incontri con i giocatori in realtà aumentata.
                    </SliderTextContainer>
                </ContentContainer>
                <img src={crociprima} />
                <SliderTextContainer style={{ marginTop: '104px', marginBottom: '104px' }}>

                    Il metaverso calcistico è ancora agli inizi, ma sta già cambiando il modo in cui viviamo lo sport. La combinazione tra tecnologia, economia digitale e passione per il calcio apre scenari incredibili, rendendo il gioco più accessibile, interattivo e immersivo.
                    <br />
                    Sei pronto a scendere in campo nel calcio del futuro?        </SliderTextContainer>
                <div style={{ marginTop: '80px' }}>

                    <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d' }}>
                        <Title style={{ fontSize: '40px' }}>Articoli Correlati</Title>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', marginTop: '78px' }}>
                            <CardArticolo />
                            <CardArticolo />
                            <CardArticolo />
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

export default MetaversoCalcistico;
