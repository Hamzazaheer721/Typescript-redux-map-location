import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IColorObjectProp } from './types'

interface IToastContainerProp {
  colors: IColorObjectProp
}

interface ITitleContainerProp {
  colors: IColorObjectProp
}

export const ToastContainer = styled.div<IToastContainerProp>`
  background-color: ${(props) => props.colors.backgroundColor};
  border-radius: 8px;
  width: 100%;
  margin-bottom: 10%;
  text-align: left;
  padding: 5px 10px;
  display: flex;
`

export const CheckIcon = styled(FontAwesomeIcon)<IToastContainerProp>`
  background-color: ${(props) => props.colors.statusColor};
  padding: 0 3px;
  font-size: 22px;
  border-radius: 50%;
  color: white;
`

export const TitleContainer = styled.div<ITitleContainerProp>`
  width: 100%;
  padding-bottom: 20px;
  h2 {
    color: ${(props) => props.colors.statusColor};
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0 0 5px;
  }
`

export const CrossIcon = styled(FontAwesomeIcon)`
  color: black;
  float: right;
  margin-right: 5px;
  cursor: pointer;
`

export const Description = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
  opacity: 1;
  margin-left: 5px;

  span {
    font-weight: 600;
  }
`
