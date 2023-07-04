import styled from "styled-components";
const FormIscrizione = styled.div`
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

const InputIscrizione = styled.input`
  background-color: #124921;
  width: 400px;
  height: 30px;
  border: none;
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
  color: #0a471d;
  font-size: 40px;
  font-weight: bold;
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
