import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import img1 from './../assets/images/bg-main-desktop.png';
import img2 from './../assets/images/bg-card-front.png';
import img3 from './../assets/images/bg-card-back.png';
import img4 from './../assets/images/bg-main-mobile.png';
import CardLogoSvg from './../assets/images/card-logo.svg?react';

const Background = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <MainDesktopImageContainer>
        <MainDesktopImage src={isMobile ? img4 : img1} alt='imgBgMainDesktop' />
      </MainDesktopImageContainer>

      <CardFrontImageContainer>
        <CardFrontImage src={img2} alt='imgCardFront' />
      </CardFrontImageContainer>

      <CardBackImageContainer>
        <CardBackImage src={img3} alt='imgCardBack' />
      </CardBackImageContainer>

      <CardLogoContainer>
        <CardLogoSvg />
      </CardLogoContainer>
    </>
  );
}

const MainDesktopImageContainer = styled.div`
  width: 450px;
  height: 600px;

  @media (max-width: 700px) {
    width: 100%; // Cambia el ancho a 100% para pantallas más pequeñas
    height: auto; // Ajusta la altura automáticamente
    transform: translate(0,-15px);
  }
`;

const MainDesktopImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardFrontImageContainer = styled.div`
  width: 170px;
  height: 90px;
  transform: rotate(360deg) scale(2.2) translate(120px, -212px);

  @media (max-width: 700px) {
    position: relative;
    transform: rotate(360deg) scale(1.7) translate(43px, -58px);
    z-index: 1;
  }
`;

const CardFrontImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardBackImageContainer = styled.div`
  width: 360px;
  height: 200px;
  transform: translate(260px, -390px);

  @media (max-width: 700px) {
    transform: scale(.75) translate(58px, -438px);
  }
`;

const CardBackImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  transform: translate(178px, -790px) scale(0.8);

  @media (max-width: 700px) {
    position: relative;
    transform: translate(18px, -420px) scale(0.62);
    z-index: 1;
  }
`;

// *📍 Labels Card
const LabelCardContainer = styled.div`
  position: relative;
  top: -830px;
  left: 174px;
  width: 346px;
  height: 100px;

  @media (max-width: 700px) {
    top: -470px;
    left: -17px;
    transform: scale(0.75);
    z-index: 1;
  }
`;

const LabelCardName = styled.label`
  width: 140px;
  position: absolute;
  top: 80px;
  right: 190px;
  font-size: 11.5px;
  letter-spacing: 2px;
  color: white;
  z-index: 3;
`;

// * 📌 LabelCards
const LabelCardNumber = styled.label`
  width: 350px;
  position: absolute;
  top: 22px;
  left: 14px;
  font-size: 20px;
  color: white;
  letter-spacing: 5.4px;
  z-index: 1;
`;

const LabelCardDate = styled.label`
  width: 20px;
  position: absolute;
  top: 80px;
  height: 19px;
  font-size: 10px;
  letter-spacing: 2px;
  color: white;
  z-index: 3;

  left: ${(props) => {
    switch (true) {
      case props.year:
        return '322px';
      case props.month:
        return '292px';
      case props.slash:
        return '313px';
      default:
        return '0px';
    }
  }};
`;

const LabelCardCCV = styled.label`
  position: absolute;
  top: 230px;
  left: 373px;
  color: white;
  font-size: 13px;
  letter-spacing: 1px;
  z-index: 3;

  @media  (max-width: 700px) {
    top: -106px;
    left: 370px;
  }
`;

export { Background, LabelCardNumber, LabelCardName, LabelCardDate, LabelCardCCV, LabelCardContainer };