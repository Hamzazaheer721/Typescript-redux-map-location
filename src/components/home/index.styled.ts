import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div`
  background-color: #f4f4f5;
`

export const CardsContainer = styled.div`
  padding: 0 3rem;

  @media ${device.laptop} {
    padding: 0;
  }

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.mobile} {
    padding: 0;
  }

  @media ${device.tiny} {
    padding: 0;
  }
`
export const WelcomeText = styled.h1`
  color: black;
  position: absolute;
  font-size: 20px;
`
