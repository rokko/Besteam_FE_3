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


const VirtualCareer = () => {
    // State for slider
    const images = [seriea, ronaldinho, argentina];

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
                        src={ronaldinho}
                        alt="La carriera da calciatore virtuale"
                    />
                </ImageContainer>

                <ContentContainer>
                    <Title>
                        Besteam: la carriera da calciatore virtuale come non l’hai mai vissuta<br />
                    </Title>

                    <AuthorDate>
                        Besteam | 10/03/25
                    </AuthorDate>

                    <CategoriesContainer>
                        <Category>Career Mode</Category>
                        <Category>Role Play</Category>
                    </CategoriesContainer>

                    {/* Testo introduttivo */}
                    <IntroText>
                        Immagina di entrare in un mondo dove la tua carriera da calciatore non è guidata da una storyline predefinita, ma da ogni scelta che fai, ogni allenamento che segui, ogni partita che giochi. Benvenuto su Besteam, l’esperienza calcistica virtuale che fonde il realismo dell’eSport con la libertà totale di un GDR (gioco di ruolo). Qui, sei tu a scrivere la tua storia.
                    </IntroText>

                    {/* Sections */}
                    <SectionContent>
                        <SectionTitle>L’inizio di un sogno</SectionTitle>
                        <SectionText>
                            Tutto comincia con la creazione del tuo avatar. Scegli l’aspetto fisico, definisci le tue abilità tecniche e sportive, e poi... si parte. Ti ritrovi nel Footballverse, un mondo virtuale vibrante dove ti alleni, giochi partite e inizi a farti notare.
                            <br />Non ci sono binari obbligati: ogni azione che compi ha un impatto reale sulla tua crescita. Più ti impegni, più il tuo giocatore evolve. Le tue statistiche migliorano, le abilità si affinano, e iniziano ad arrivare le prime offerte da club e sponsor.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>Un percorso di crescita reale</SectionTitle>
                        <SectionText>
                            In Besteam non esiste il “livello massimo”: la crescita è continua. Giocando e allenandoti con costanza, puoi salire di categoria, attirare l’attenzione di squadre più forti, e puntare in alto, verso il mondo degli eSport professionistici.
                            <br />Tornei, competizioni sempre più difficili, premi in palio e la possibilità di far parte di un’élite virtuale che ha fatto della passione un mestiere.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>Fama, reputazione e community</SectionTitle>
                        <SectionText>
                            Come ogni vero calciatore, anche tu potrai costruire la tua fanbase, guadagnare popolarità e diventare un riferimento nel mondo Besteam. Le tue prestazioni in campo incidono direttamente sulla tua reputazione: una tripletta decisiva in una finale può farti esplodere sui social, mentre una stagione sottotono può costarti contratti e visibilità.
                            <br />Ma non sei solo: attorno a te cresce una community. Fan, compagni di squadra, avversari, allenatori... ogni relazione conta.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>Una carriera che si trasforma</SectionTitle>
                        <SectionText>
                            Il bello? La tua carriera non finisce quando smetti di correre in campo. Besteam ti permette di reinventarti: puoi diventare allenatore, procuratore, giornalista sportivo o addirittura telecronista.
                            <br />Il mondo continua a evolversi, e tu puoi restare protagonista in nuove vesti, contribuendo all’ecosistema del gioco e mantenendo viva la tua esperienza.
                        </SectionText>
                    </SectionContent>

                    <SectionContent>
                        <SectionTitle>Oltre il calcio: vivi la BestCity</SectionTitle>
                        <SectionText>
                            Besteam non è solo partite e allenamenti. Esiste un’intera città virtuale – la BestCity – dove puoi vivere da star del calcio anche nel tempo libero: visitare negozi, partecipare a eventi, esplorare musei o semplicemente socializzare.
                            <br />È un mondo che pulsa di vita, in cui ogni angolo racconta qualcosa, e ogni attività può influenzare la tua carriera.
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
                        Besteam è più di un gioco. È un percorso di crescita, un’avventura immersiva dove passione, impegno e strategia ti permettono di costruire una carriera su misura, come in un vero RPG sportivo.
                        <br /><br />
                        Fatti trovare pronto, perché il tuo viaggio nel Metaverso di Besteam è appena cominciato.
                    </SliderTextContainer>
                    <div style={{ marginTop: '80px' }}>

                        <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d' }}>
                            <Title style={{ fontSize: '40px' }}>Articoli Correlati</Title>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', marginTop: '78px' }}>
                                <CardArticolo link='/ruolo-presidente' />
                                <CardArticolo link='/carriera-virtuale' />
                                <CardArticolo link='/play-to-earn' />
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

export default VirtualCareer;
