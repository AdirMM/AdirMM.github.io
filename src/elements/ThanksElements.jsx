import styled from "styled-components";
import Check from './../assets/images/icon-complete.svg?react';

const ThanksContainer = styled.div`
  position: relative;
  top: -930px;
  left: 740px;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 330px;

  @media (max-width: 700px) {
    position: relative;
    top: -410px;
    left: 10px;
  }
`;

const ContainerLogoCheck = styled.div`
  width: 20%;
  height: 20%;
  transform: translate(120px, 0px) scale(0.7);

  @media (max-width: 700px) {
    transform: translate(143px, -20px) scale(0.94);
  }
`;

const LogoCheck = () => {
  return (
    <ContainerLogoCheck>
      <Check />
    </ContainerLogoCheck>);
};

const FirstLabel = styled.label`
  position: relative;
  font-size: 19px;
  text-transform: uppercase;
  letter-spacing: 3px;
  top: 24px;
  left: 89px;

  @media (max-width: 700px) {
    font-size: 24px;
    letter-spacing: 4px;
    left: 94px;
  }
`;

const SecondLabel = styled.label`
  position: relative;
  font-size: 13px;
  top: 38px;
  left: 60px;
  color: #89858c;

  @media (max-width: 700px) {
    font-size: 16px;
    letter-spacing: .2px;
    left: 59px;
  }
`;

export { ThanksContainer, LogoCheck, FirstLabel, SecondLabel };