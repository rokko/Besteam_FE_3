import React from 'react';
import styled from 'styled-components';

import cardImage from '../assets/cardImage.jpg';

const CardContainer = styled.a`
  width: 370px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  background-image: url(${cardImage});
  background-size: cover;
  background-position: center;
  padding-left: 33px; /* Solo padding a sinistra per l'allineamento */
  padding-right: 33px;
`;

const TitleAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Spazio tra Titolo e Autore/Data */
  margin-top: 18px; /* Esatto margine superiore */
`;

const Title = styled.h2`
  font-family: 'DINPro', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: white;
  margin: 0;
  text-align: left;
`;

const AuthorDate = styled.p`
  font-family: 'DINPro', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: white;
  margin: 0;
  text-align: left;
`;

const Category = styled.p`
  font-family: 'DINPro', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: white;
  margin: 0;
  margin-bottom: 35px; /* Distanza precisa dal margine inferiore */
  text-align: left;
`;

const CardArticolo = ({ link }: { link?: string }) => {
  return (
    <CardContainer href={link || '/articolo-test'}>
      <TitleAuthorContainer>
        <Title>Test</Title>
        <AuthorDate>Besteam.io 10/03/25</AuthorDate>
      </TitleAuthorContainer>

      <Category>Future</Category>
    </CardContainer>
  );
};

export default CardArticolo;
