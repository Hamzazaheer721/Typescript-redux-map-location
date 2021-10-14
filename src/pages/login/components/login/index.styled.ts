import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const Heading = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 24px;
  font-weight: 700;
`

export const SubHeading = styled.div`
  color : ${(props) => props.theme.color.secondary};
  font-size: 14px;
  letter-spacing: 0.7px; 
  margin-top: 13px;
  margin-bottom: 40px;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const MarginDiv = styled.div`
  visibility: hidden;
  height: 15px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CustomCheckBox = styled.input`
  margin:0;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4E98E2;
  border-radius: 3px;
`
export const CheckboxPlaceholder = styled.p`
  color: #606060;
  text-align: left;
  letter-spacing: 0px;
  padding-left: 6px;
  padding-top: 1px;
  font-size: 12px;
`