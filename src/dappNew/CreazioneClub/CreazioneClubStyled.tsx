import styled from "styled-components";
const CreazioneClubForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #dfe5e1;
  width: 600px;
  height: 500px;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const ButtonLogo = styled.div`
  background-color: #0a471d;
  border: none;
  height: 30px;
  width: 120px;
  font-size: 22px;
  color: white;
  font-weight: bold;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const InputClub = styled.input`
  background-color: white;
  width:35.57vw ;
  height: 1.727vw;
  border: none;
`;

export { CreazioneClubForm, InputClub, ButtonLogo };
