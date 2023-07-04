import { height } from "@mui/system";
import { url } from "inspector";
import React from "react";
import styled from "styled-components";
import photoTeam from "../components/video/fototeam.png";

import team1 from "./video/team/marco.png";
import team2 from "./video/team/filippo.png";
import team3 from "./video/team/enrico.png";
import verde from "./video/simboloverde.jpg";
import aranc from "./video/simboloarancione.jpg";
import { useMediaQuery } from "react-responsive";

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
                }}
              >
                <img src={team3} alt="team1" style={{ width: "15vw" }} />
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
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Enrico Coviello
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    CEO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
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
                <img src={team1} alt="team1" style={{ width: "15vw" }} />
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
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Marco Tedesco
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    COO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
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
                <img src={team2} alt="team1" style={{ width: "15vw" }} />
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
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Filippo Ballarini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    CMO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
                marginTop: "-1vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Giacomo Colella
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Blockchain Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/giacomocolella/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Rocco Caricola
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Website Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/roccocaricola/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Jep Albertini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    PM
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href="https://twitter.com/jep27pr" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Emanuele
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Paparella
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ADMIN
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Riccardo
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Ricci
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ADMIN
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
                marginTop: "-1vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Matteo De Nuzzo
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Game Designer
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/matteo-de-nuzzo-93b836197/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Edoardo Grassi
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Lead 3D
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Game Developer
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Lead Esport
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Backend Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div id="team">
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
            <div
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
                  Giacomo Colella
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
                  Blockchain Dev
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
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/giacomocolella/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
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
                  Rocco Caricola
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
                  Website Dev
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
                  <a
                    href="https://www.linkedin.com/in/roccocaricola/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
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
                  Jep Albertini
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
                  PM
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
                  <a href="https://twitter.com/jep27pr" target="_blank">
                    Twitter{" "}
                  </a>
                  -{" "}
                  <a
                    href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
            <div
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
                  Emanuele
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Paparella
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
                  ADMIN
                </p>
              </div>
            </div>
            <div
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                }}
              >
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Riccardo
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Ricci
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
                  ADMIN
                </p>
              </div>
            </div>
            <div
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
                  Matteo De Nuzzo
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
                  Game Designer
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
                  <a
                    href="https://www.linkedin.com/in/matteo-de-nuzzo-93b836197/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
            <div
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
                  Edoardo Grassi
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
                  Lead 3D
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
                  <a
                    href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
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
                src={aranc}
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
                  ...
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#F78B21",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Game Developer
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
                  {" "}
                  we want you!
                </p>
              </div>
            </div>
            <div
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
                src={aranc}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                }}
              >
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  ...
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#F78B21",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Lead Esport
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
                  {" "}
                  we want you!
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
            <div
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
                src={aranc}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                }}
              >
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  ...
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#F78B21",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Backend Dev
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
                  {" "}
                  we want you!
                </p>
              </div>
            </div>
            <div
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
                src={aranc}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                }}
              >
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  ...
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#F78B21",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Online Dev
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
                  {" "}
                  we want you!
                </p>
              </div>
            </div>
            <div
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
                src={aranc}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                }}
              >
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  ...
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#F78B21",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Full-Stack Dev
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
                  {" "}
                  we want you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurTeam;
