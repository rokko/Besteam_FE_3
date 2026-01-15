import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import card from './assets/articoloImage.jpg';
import CardArticolo from './components/CardArticolo';
import NewsLetter from '../components/NewsLetter';
import frecciaright from './assets/frecciaright.png';
import cardImage from './assets/cardImage.jpg'
const ContainerBlack = styled.div`
  background-color: #1c1c1c;
  height: 100%;
`;

const SectionArticoli = styled.div`
  display: grid;
  gap: 45px; /* Spazio fisso tra le card */
  margin-top: 180px;
  place-items: center;
  max-width: 1200px; /* Impedisce che si allarghi troppo su schermi grandi */
  margin-left: auto;
  margin-right: auto;

  grid-template-columns: repeat(1, 1fr); /* Mobile */

  @media (min-width: 768px) { /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) { /* Desktop */
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 480px;
  background-image: url(${card});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 60px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const HeroTitle = styled.h2`
  font-family: 'DINPro', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: white;
  margin: 0;
  text-align: left;
`;

const HeroAuthorDate = styled.p`
  font-family: 'DINPro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: white;
  margin: 0;
  text-align: left;
`;

const HeroCategory = styled.p`
  font-family: 'DINPro', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: white;
  margin: 0;
  text-align: left;
`;

const HeroTitleAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Blog = () => {
  return (
    <ContainerBlack>
      <HeroContainer>
        <HeroTitleAuthorContainer>
          <HeroTitle>Un Nuovo Inizio</HeroTitle>
          <HeroAuthorDate>Besteam.io 10/03/25</HeroAuthorDate>
        </HeroTitleAuthorContainer>
        <HeroCategory>Innovation</HeroCategory>
      </HeroContainer>

      <SectionArticoli>
        <CardArticolo link='/metaverso-calcistico' />
        <CardArticolo link='/articolo-test' />
        <CardArticolo link='/articolo-test' />

      </SectionArticoli>

      <div className="paginationControls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '55px' }}>
        {Array.from({ length: 1 }, (_, i) => (
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
      <div style={{ marginTop: '180px' }}>
        <NewsLetter />
      </div>
      <Footer />
    </ContainerBlack>
  );
};

export default Blog;
