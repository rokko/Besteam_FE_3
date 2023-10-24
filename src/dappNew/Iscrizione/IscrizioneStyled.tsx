import styled from "styled-components";
const FormIscrizione = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 33.85vw;
  height: 35.93vw;
  gap: 2rem;
  background-color: #E8E8E8;
`;

const InputIscrizione = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  border : 1px solid green
`;

const ButtonIscrizione = styled.div`
  background-color: #2bc251;
  border: none;
  height: 30px;
  width: 120px;
  font-size: 22px;
  color: black;
  font-weight: bold;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TestoIscrizione = styled.div`
  color: #10451d;
  font-size: 1.71vw;
  font-family: 'DIN-ProMedium';
`;

const TestoPiccolo = styled.div`
  color: #0a471d;
  font-size: 18px;
  font-weight: bold;
`;
export {
  FormIscrizione,
  InputIscrizione,
  ButtonIscrizione,
  TestoIscrizione,
  TestoPiccolo,
};
