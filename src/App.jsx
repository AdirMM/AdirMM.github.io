import React from 'react';
import Form from './components/Form';
import Thanks from './components/Thanks'
import Container from './elements/Container.jsx';
import { Background, LabelCardCCV, LabelCardContainer, LabelCardDate, LabelCardName, LabelCardNumber } from './elements/Background.jsx';
import { useFormContext } from './components/FormContext.jsx';

const App = () => {

  const {formVisible, labelCardNumber, labelName, labelMonth, labelYear, labelCCV} = useFormContext();

  return (
    <Container>
      <Background />
      <LabelCardContainer>
        <LabelCardNumber>{labelCardNumber}</LabelCardNumber>
        <LabelCardName>{labelName}</LabelCardName>
        <LabelCardDate month >{labelMonth}</LabelCardDate>
        <LabelCardDate slash >/</LabelCardDate>
        <LabelCardDate year >{labelYear}</LabelCardDate>
        <LabelCardCCV>{labelCCV}</LabelCardCCV>
      </LabelCardContainer>

      {
        formVisible ? <Form /> : <Thanks />
      }
    </Container>
  );
}

export default App;