import { height } from "@mui/system";
import { url } from "inspector";
import React from "react";
import styled from "styled-components";
import photoTeam from "../components/video/fototeam.png";
import arrowright from "../components/video/freccia.png";
import arrowleft from "../components/video/frecciasinistra.png";
import team1 from "./video/team/marco.png";
import silviaDellOrco from "./video/immaginiOurTeam/Card Silvia.webp";
import team2 from "./video/team/filippo.png";
import team3 from "./video/team/enrico.png";
import verde from "./video/simboloverde.jpg";
import giuseppeAlbertini from "./video/immaginiOurTeam/Card GiuseppeAlbertini.webp";
import aranc from "./video/simboloarancione.jpg";
import giacomoVettori from "./video/immaginiOurTeam/Card GiacomoV.webp";
import { useMediaQuery } from "react-responsive";
import giannotti from '../components/video/immaginiOurTeam/Card Giannotti.webp'
import { Slide } from "react-slideshow-image";
import enrico from '../components/video/enrico.webp'
import carrara from '../components/video/immaginiOurTeam/Card Carrara.webp'
import zannutti from '../components/video/immaginiOurTeam/Card Zanutto.webp'
import rizzo from '../components/video/immaginiOurTeam/Card Rizzo.webp'
import angelica from '../components/video/immaginiOurTeam/Card Angelica.webp'
import saverio2 from '../components/video/immaginiOurTeam/Card Saverio.webp'
import davide from '../components/video/immaginiOurTeam/Card Davide.webp'
import niccolò from '../components/video/immaginiOurTeam/Card Guglielmi.webp'
import gabriele from '../components/video/immaginiOurTeam/Card Gabriele.webp'
import marco from '../components/video/immaginiOurTeam/Card Marco.webp'
import filippoV from '../components/video/immaginiOurTeam/Card FilippoV.webp'
import francesco from '../components/video/immaginiOurTeam/Card Francesco.webp'
import giulioleso from '../components/video/immaginiOurTeam/Card Giulio 2.webp'
import filippo from '../components/video/immaginiOurTeam/Card Filippo.webp'
import giulietta from '../components/video/immaginiOurTeam/Card Giulietta.webp'
import edoardo from '../components/video/immaginiOurTeam/Card Edoardo.webp'
import ornella from '../components/video/immaginiOurTeam/Card Ornella.webp'
import federico from '../components/video/immaginiOurTeam/Card Federico.webp'
import eduardo from '../components/video/immaginiOurTeam/Card Eduardo.webp'
import niccolò2 from '../components/video/immaginiOurTeam/Card Niccolo2.webp'
import elisa from '../components/video/immaginiOurTeam/Card Elisa.webp'
import giovanni from '../components/video/immaginiOurTeam/Card Giovanni.webp'
import alessandroFeliciani from '../components/video/immaginiOurTeam/Card Alessandro.webp'
import rocco from '../components/video/immaginiOurTeam/Card Rocco.webp'
import jacopo from '../components/video/immaginiOurTeam/Card Jacopo.webp'
import eros from '../components/video/immaginiOurTeam/Card Eros.webp'
import aminul from '../components/video/immaginiOurTeam/Card Aminul.webp'
import giacomo from '../components/video/immaginiOurTeam/Card Giacomo.webp'
import mauro from '../components/video/immaginiOurTeam/Card Mauro.webp'
import gaetano from '../components/video/immaginiOurTeam/Card Gaetano.webp'
import ale from '../components/video/ale.webp'
import giuliano from '../components/video/immaginiOurTeam/Card Giuliano.webp'
import giuseppe from '../components/video/immaginiOurTeam/Card Giuseppe.webp'
import emanuele from '../components/video/immaginiOurTeam/Card Emanuele.webp'
import vinenzo from '../components/video/immaginiOurTeam/Cad Enzo.webp'
import lorena from '../components/video/immaginiOurTeam/Card Lorena.webp'
import mattia from '../components/video/immaginiOurTeam/Card Mattia.webp'
import riccardo from '../components/video/immaginiOurTeam/Card Riccardo.webp'
const customOptions = {

  prevArrow: (
    <div
      className="hoverzoom"
      style={{
        left: "1rem",
        top: "8rem",
        display: "block",
      }}
    >
      <img src={arrowleft} width="23px" height="30px" />
    </div>
  ),
  nextArrow: (
    <div
      className="hoverzoom"
      style={{
        right: "1rem",
        top: "8rem",
        display: "block",
      }}
    >
      <img src={arrowright} width="23px" height="30px" />{" "}
    </div>
  ),
};
const customOptions2 = {
  prevArrow: (
    <div
      className="hoverzoom"
      style={{ width: "20px", marginRight: "-20px" }}
    >
      <img
        src={arrowleft}
        width="20x!important"
        height="20px"
        style={{ position: "absolute", left: "20px", top: "-10px" }}
      />
    </div>
  ),
  nextArrow: (
    <div className="hoverzoom" style={{ width: "20px", marginLeft: "-20px" }}>
      <img
        src={arrowright}
        width="20px"
        height="20px"
        style={{
          position: "absolute",
          top: "-10px",

          right: "20px",
        }}
      />{" "}
    </div>
  ),
};

const ContainerPersone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SinglePerson = styled.div`
  display: flex;
  flex-direction: column;
`;

const containerOurPartner = styled.div`
  background-image: url(${photoTeam});
  background-size: cover;
`;

const TestoLink = styled.p`
text-align: left;
                 font-family: "DINPro";
                      font-size: 1.4vw;
                      color: #9B9B9B;
                      margin-top:-1.5vw;

                      `
const BoxImageTeam = styled.div`
  display: flex;
  flex-direction: column;
  border: 6px solid #2DC653;
border-radius:1.4541666666666667vw;
z-index:10000;
opacity: 1;
width:15.22vw;
height:26.04vw;
margin-left:4.5vw;
  `
const BoxInfoTeam = styled.div
  `
  display: flex;
  flex-direction: column;
  padding:1rem;
  justify-content: center;
align-content: center;
  `


const TestoRuolo = styled.p`
font-family: 'DINPro';
color: #2DC653;
font-size: 1.406vw;
text-align: left;
margin-top:-1.5vw

`

const TestoNome = styled.p`
font-family: 'DINProBold';
color: white;
font-size: 1.7vw;
text-align: left;
margin-top:0px
`

const OurTeam = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <div id="team">
        <div className="container-page">
          <p
            className="testo-newsletter"
            style={{ fontFamily: "DinPROBold", marginTop: "13vh" }}
          >
            OUR TEAM
          </p>
          <div style={{ width: "80%", display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
            <Slide slidesToShow={3} {...customOptions}>



              <BoxImageTeam >
                <img src={enrico} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Enrico Coviello
                  </TestoNome>
                  <TestoRuolo>CEO, Co-founder</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={marco} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Marco Tedesco
                  </TestoNome>
                  <TestoRuolo>COO, Co-founder</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={filippo} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Filippo  Ballarini  </TestoNome>
                  <TestoRuolo>CMO</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={giulietta} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Giulietta Minucci
                  </TestoNome>
                  <TestoRuolo>CLO</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/giuliettaminucci/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
               <BoxImageTeam>
                <img src={edoardo} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Edoardo Grassi
                  </TestoNome>
                  <TestoRuolo>Lead 3D</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={edoardo} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Edoardo Grassi
                  </TestoNome>
                  <TestoRuolo>Lead 3D</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={alessandroFeliciani} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Alessandro Feliciani
                  </TestoNome>
                  <TestoRuolo>Rigger</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/alessandro-feliciani-b607ab5/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={ornella} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Ornella Lacovara
                  </TestoNome>
                  <TestoRuolo>Texturing</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/ornella-lacovara-654a80214"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam >
                <img src={francesco} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Francesco D'Urso
                  </TestoNome>
                  <br />
                  <TestoRuolo>Character designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/francesco-d-urso-686035235/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={filippoV} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Filippo Vetro
                  </TestoNome>
                  <TestoRuolo>Character designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="http://linkedin.com/in/filippovetro3d"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={rizzo} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Eduardo Rizzo  </TestoNome>
                  <TestoRuolo>Lighting</TestoRuolo>
                  <TestoLink>
                    <a
                      href="http://linkedin.com/in/eduardo-rizzo90"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={niccolò2} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Niccolò De Stefano </TestoNome>
                  <br />
                  <TestoRuolo>3D Modeler</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/niccolò-destefano-0126011b5/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={federico} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Federico Latini </TestoNome>
                  <br />
                  <TestoRuolo>3D Animator</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/federico-latini/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={jacopo} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Jacopo Gornati
                  </TestoNome>
                  <TestoRuolo>Back-end developer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/jacopo-gornati-91955868/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={giuliano} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Giuliano Neroni
                  </TestoNome>
                  <TestoRuolo>Blockchain dev.</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/giuliano-neroni-901217151/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={rocco} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Rocco Caricola  </TestoNome>
                  <TestoRuolo>Front-End developer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/roccocaricola/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={aminul} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Aminul Hossain
                  </TestoNome>
                  <TestoRuolo>IT</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/aminul-hossain-185a30163/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={elisa} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Elisa Gallani
                  </TestoNome>
                  <TestoRuolo>UI/UX Designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/elisa-gallani-433644168/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={zannutti} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Gabriele Zanutto
                  </TestoNome>
                  <TestoRuolo>Game Designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/gabriele-zanutto-130494238/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={carrara} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Francesco Carrara
                  </TestoNome>
                  <TestoRuolo>Game Designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/francesco-carrara-profilo/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={giannotti} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome>
                    Andrea Giannotti
                  </TestoNome>
                  <TestoRuolo>Game dev.</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/andrea-giannotti26/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={emanuele} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Emanuele Paparella
                  </TestoNome>
                  <br />
                  <TestoRuolo>Sound Producer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/emanuele-paparella-9a86b024b/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={silviaDellOrco} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Silvia Dell'Orco
                  </TestoNome>
                  <br />
                  <TestoRuolo>Innovation manager</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/silviadellorco/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={giuseppeAlbertini} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Giuseppe Albertini
                  </TestoNome>
                  <br />
                  <TestoRuolo>PM</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={angelica} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Angelica Cavazza  </TestoNome>
                  <br />
                  <TestoRuolo>VFX</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/angelica-cavazza-a06921360/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={saverio2} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Saverio Fontana  </TestoNome>
                  <br />
                  <TestoRuolo>Game dev</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/saverio-fontana-1a9308159/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={davide} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Davide Scavo  </TestoNome>
                  <br />
                  <TestoRuolo>Business dev.</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/davidescavo/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={niccolò} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Niccolò Guglielmi </TestoNome>
                  <br />
                  <TestoRuolo>Game dev.</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/niccol%C3%B2-guglielmi/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={gabriele} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Gabriele Vitelli</TestoNome>
                  <br />
                  <TestoRuolo>Level designer</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/gabriele-vitelli-8691a233b/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
              <BoxImageTeam>
                <img src={giacomoVettori} style={{ zIndex: '-100', width: '102%', alignSelf: 'center' }} />
                <BoxInfoTeam>
                  <TestoNome >
                    Giacomo Vettori</TestoNome>
                  <br />
                  <TestoRuolo>3D Animator</TestoRuolo>
                  <TestoLink>
                    <a
                      href="https://www.linkedin.com/in/giacomo-vettori-3a066b378/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </TestoLink>
                </BoxInfoTeam>
              </BoxImageTeam>
            </Slide>

          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
    );
  else
    return (
      <div id="team">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
          className="container-page"
          style={{ height: "400px", marginTop: "15vh" }}
        >
          <p
            className="testo-newsletter"
            style={{ fontFamily: "DinPROBold", marginTop: "15vh" }}
          >
            OUR TEAM
          </p>

          <div
            style={{
              marginTop: "-3.5rem",
              display: "flex",
              flexDirection: "row",
              padding: "3rem",
              gap: "1rem",
              maxWidth: "100%",
              justifyContent: "center",
              marginBottom: "5vh",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={team3} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Enrico Coviello
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    CEO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",

                      margin: 0,
                    }}
                  >
                    {" "}
                    <a
                      href="https://twitter.com/Enrico_Coviello"
                      target="_blank"
                    >
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team1} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Marco Tedesco
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    COO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href="https://twitter.com/Tedarco96" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team2} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Filippo Ballarini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    CMO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
              marginTop: "-7vh",
            }}
          >
            {[
              { name: "Giulietta Minucci", role: "CLO", link: "https://www.linkedin.com/in/giuliettaminucci/" },
              { name: "Giulio Leso", role: "CTO", link: "https://www.linkedin.com/in/giulioleso/" },
              { name: "Edoardo Grassi", role: "Lead 3D", link: "https://www.linkedin.com/in/edoardo-grassi-278331162/" }
            ].map((member, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100px",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "7vw", height: "7vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "2.5vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "2.5vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.5vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href={member.link} target="_blank">
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {[
            [
              { name: "Alessandro Feliciani", role: "Rigger", link: "https://www.linkedin.com/in/alessandro-feliciani-b607ab5/" },
              { name: "Ornella Lacovara", role: "Texturing", link: "https://www.linkedin.com/in/ornella-lacovara-654a80214" },
              { name: "Francesco D'Urso", role: "Character designer", link: "https://www.linkedin.com/in/francesco-d-urso-686035235/" }
            ],
            [
              { name: "Filippo Vetro", role: "Character designer", link: "http://linkedin.com/in/filippovetro3d" },
              { name: "Eduardo Rizzo", role: "Lighting", link: "http://linkedin.com/in/eduardo-rizzo90" },
              { name: "Niccolò De Stefano", role: "3D Modeler", link: "https://www.linkedin.com/in/niccolò-destefano-0126011b5/" }
            ],
            [
              { name: "Federico Latini", role: "3D Animator", link: "https://www.linkedin.com/in/federico-latini/" },
              { name: "Jacopo Gornati", role: "Back-end developer", link: "https://www.linkedin.com/in/jacopo-gornati-91955868/" },
              { name: "Giuliano Neroni", role: "Blockchain dev.", link: "https://www.linkedin.com/in/giuliano-neroni-901217151/" }
            ],
            [
              { name: "Rocco Caricola", role: "Front-End developer", link: "https://www.linkedin.com/in/roccocaricola/" },
              { name: "Aminul Hossain", role: "IT", link: "https://www.linkedin.com/in/aminul-hossain-185a30163/" },
              { name: "Elisa Gallani", role: "UI/UX Designer", link: "https://www.linkedin.com/in/elisa-gallani-433644168/" }
            ],
            [
              { name: "Gabriele Zanutto", role: "Game Designer", link: "https://www.linkedin.com/in/gabriele-zanutto-130494238/" },
              { name: "Francesco Carrara", role: "Game Designer", link: "https://www.linkedin.com/in/francesco-carrara-profilo/" },
              { name: "Andrea Giannotti", role: "Game dev.", link: "https://www.linkedin.com/in/andrea-giannotti26/" }
            ],
            [
              { name: "Emanuele Paparella", role: "Sound Producer", link: "https://www.linkedin.com/in/emanuele-paparella-9a86b024b/" },
              { name: "Silvia Dell'Orco", role: "Innovation manager", link: "https://www.linkedin.com/in/silviadellorco/" },
              { name: "Giuseppe Albertini", role: "PM", link: "https://www.linkedin.com/in/giuseppe-albertini-734a3244/" }
            ],
            [
              { name: "Angelica Cavazza", role: "VFX", link: "https://www.linkedin.com/in/angelica-cavazza-a06921360/" },
              { name: "Saverio Fontana", role: "Game dev", link: "https://www.linkedin.com/in/saverio-fontana-1a9308159/" },
              { name: "Davide Scavo", role: "Business dev.", link: "https://www.linkedin.com/in/davidescavo/" }
            ],
            [
              { name: "Niccolò Guglielmi", role: "Game dev.", link: "https://www.linkedin.com/in/niccol%C3%B2-guglielmi/" },
              { name: "Gabriele Vitelli", role: "Level designer", link: "https://www.linkedin.com/in/gabriele-vitelli-8691a233b/" },
              { name: "Giacomo Vettori", role: "3D Animator", link: "https://www.linkedin.com/in/giacomo-vettori-3a066b378/" }
            ]
          ].map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.3rem",
              }}
            >
              {row.map((member, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "100px",
                  }}
                >
                  <img
                    src={verde}
                    alt="verde"
                    style={{ width: "7vw", height: "7vw" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontFamily: "DINProCondBold",
                        color: "white",
                        fontSize: "2.5vw",
                        textAlign: "left",
                        margin: 0,
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "DINProCondBold",
                        color: "#2DC653",
                        fontSize: "2.5vw",
                        textAlign: "left",
                        margin: 0,
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "DINProCondReg",
                        fontSize: "2.5vw",
                        color: "#9B9B9B",
                        margin: 0,
                      }}
                    >
                      <a href={member.link} target="_blank">
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}



        </div>
      </div>
    );
};

export default OurTeam;
