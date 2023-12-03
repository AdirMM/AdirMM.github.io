import styled from "styled-components";

const FormContainer = styled.form`
  position: relative;
  top: -930px;
  left: 730px;
  width: 330px;
  height: 330px;

  @media (max-width: 700px) {
    top: -436px;
    left: 20px;
    height: 363px;
  }
`;

// *📌 Grouping label & input in column
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// *📌 Grouping inputs in row
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  height: 40px;

  margin-top: ${(props) => props.marginTopRowCont ? '5px' : '0px'};
`;

const Input = styled.input`
  height: 30px;
  border: 1px solid ${props => props.inputError ? 'red' : '#ccc'};
  border-radius: 4px;
  margin-bottom: 10px;

  /* Text and placeholder */
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ababab;
  }

  width: ${(props) => {
    switch (true) {
      case props.inputShort:
        return "53px";
      case props.inputMedium:
        return "100%";
      case props.inputLarge:
        return "315px";
      default:
        return '250px';
    }
  }};

  margin-right: ${(props) => {
    switch (true) {
      case props.marginRightInput:
        return '10px';
      case props.marginRightInputMinus:
        return '15px';
      default:
        return '0px';
    }
  }};

  @media (max-width: 700px) {
    height: 44px;
    border-radius: 7px;
    width: 100%;
    font-size: 16px;

    width: ${(props) => {
    switch (true) {
      case props.inputShort:
        return "59px";
      case props.inputMedium:
        return "100%";
      case props.inputLarge:
        return "100%";
      default:
        return '250px';
    }
  }};
  }
`;

const Label = styled.label`
  font-size: ${(props) => props.fontSizeLabel ? '8.8px' : '9.8px'};
  text-transform: ${(props) => props.uppercase ? 'uppercase' : null};
  
  /* Margins top and bottom the label form */
  margin-top: ${(props) => props.marginTop ? '4px' : null};
  margin-bottom: ${(props) => props.marginBottom ? '4px' : null};
  /* Margin right label error RowContainer */
  margin-right: ${(props) => props.marginRightLabel ? '45px' : '20px'};

  /* 📱 Responsive Design Input Labels */

  @media (max-width: 700px) {
    font-size: ${(props) => props.fontSizeLabel ? '10.2px' : '12px'};
    letter-spacing: 1px;
    margin-right: ${(props) => props.marginRightLabel ? '17px' : '10px'};
    z-index: 2;
  }
`;

const ErrorLabelsDateCCV = styled.div`
  display: flex;
  width: ${(props) => props.widthErrorLabel ? '66px' : null};
  text-align: center;

  @media (max-width: 700px) {
    transform: translate(${(props) => props.translateErrorLabelCCV ? '109px, -30px' : null});
    /* Both Error Labels */
    transform: translate(${(props) => props.translateErrorLabelDate ? '0px, 10px' : '48px, 14px'});
  }
`;

const Button = styled.button`
  position: relative;
  top: ${(props) => props.top ? '80px' : '-10px'};
  left: ${(props) => props.left ? '14px' : null};
  width: ${(props) => props.width ? '90%' : '100%'};
  height: 37px;
  color: white;
  font-size: 12px;
  letter-spacing: .7px;
  font-weight: 500;
  background-color: hsl(278, 68%, 11%);
  border: 2px solid hsl(278, 68%, 11%);
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 17px;
    top: ${(props) => props.top ? '80px' : '5px'};
  }
`;

export { FormContainer, ErrorLabelsDateCCV, Input, Label, RowContainer, ColumnContainer, Button };