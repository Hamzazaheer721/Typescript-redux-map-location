import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'antd/es/select';
import styled from 'styled-components'
import { device } from '../../styles/devices';

export const Label = styled.p`
  color: #c5c5c5;
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.22s;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  padding: 0 7px;

  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tiny} {
    font-size: 12px;
  }
`

export const SelectContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  transition: 0.4s;
  padding: 5px;
  margin-bottom: 15px;

  p {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: white;
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
    background: linear-gradient(180deg, #F2F4FF 50%, white 50%);
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const Prefix = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const SelectField = styled(Select)`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none !important;

  .ant-select-selection-item {
    margin-left: 20px !important;
    margin-top: 1.5px;
  }

  .ant-select-selector {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none !important;
    box-shadow: none !important;
    padding-left: 1.9rem !important;
    
    :focus {
      outline: none;
    }
    :focus {
      outline: none;
    }
  }

  ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
    .ant-select-selector{
      padding-left: 0.1rem !important;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
    .ant-select-selector{
      padding-left: 0.1rem !important;
    }
  }
`