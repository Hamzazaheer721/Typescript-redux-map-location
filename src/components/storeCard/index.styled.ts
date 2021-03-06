/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../styles/devices'

export const CardContainer = styled.div`
  width: 100%;
  margin: 0 3px 5px 3px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px #0000001a;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tiny} {
    width: 100%;
  }
`

export const CardWrapper = styled.div`
  padding: 0 10px;

  @media ${device.desktop1080p} {
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 20%;
  }

  @media ${device.desktop} {
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 25%;
  }

  @media ${device.laptop} {
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 33.334%;
    padding: 0 10px;
  }

  @media ${device.tablet} {
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0 10px;
  }

  @media ${device.mobile} {
    padding: 0 10px;
  }

  @media ${device.tiny} {
    padding: 0 10px;
  }
`

export const GroupContainer = styled.div`
  position: relative;
  border-radius: 7px;
  row-gap: 0.25rem;
`

export const HeaderArea = styled.div`
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
`

export const SubHeaderArea = styled.div`
  display: flex;
  position: absolute;
  margin-top: 1.5rem;
  justify-content: between;
  width: 100%;
`

export const BadgeArea = styled.span`
  color: white;
  margin-left: 5px;
  font-size: 12px;
`
export const BadgeAreaWraper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  padding: 0 5px 1px 2px;
  white-space: nowrap;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const IconArea = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  float: right;
  width: 100%;
  margin-top: -15px;
`

export const TimeArea = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  text-align: right;
  background-color: gray;
  background: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.lightBlue};
  padding: 0 12px;
  border-radius: 7px;
  font-size: 12px;
`
export const IconStyle = styled(FontAwesomeIcon)`
  font-size: 22px;
  width: 23px !important;
  height: 23px !important;
  text-align: center;
  vertical-align: middle;
  padding: 6px;
  background-color: white;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 50%;
  cursor: pointer;
`

export const RatingIconStyle = styled(FontAwesomeIcon)`
  font-size: 20px;
  padding: 3px 3px 3px 5px;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.color.yellow};
`

export const IconContainer = styled.div`
  float: right;
`

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`
export const ProfileContainer = styled.div`
  display: flex;
`
export const ProfileImage = styled.img`
  position: absolute;
  width: 65px;
  margin-left: 0.8rem;
  height: 65px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  top: 79%;
  border-radius: 10px;
  flex: 5;

  @media ${device.mobile} {
    margin-left: 0.6rem;
  }

  @media ${device.tiny} {
    margin-left: 0.6rem;
  }
`

export const ProfileSubContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`

export const ProductName = styled.h5`
  font-size: 16px;
  position: absolute;
  margin-top: 4px;
  margin-left: 31%;
  flex: 8;
  font-weight: 600;

  @media ${device.mobile} {
    margin-left: 30%;
  }

  @media ${device.tiny} {
    margin-left: 30%;
  }
`
export const RatingArea = styled.span`
  display: inline-flex;
  padding-right: 0.6rem;
  padding-left: 1rem;
  position: absolute;
  right: 0;
  margin-top: 4px;
`
export const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 15px;
  margin-bottom: 0;
`
export const ButtonsContainer = styled.p`
  width: 100%;
  padding: 10px;
  text-align: left;
`
export const ShopButton = styled.button`
  padding: 0 4px;
  background: ${(props) => props.theme.gradientButton.primary};
  color: white;
  border: none;
  border-radius: 20px;
  height: 40px;
  width: 120px;
  font-size: 16px;
  font-weight: 500;

  @media ${device.mobile} {
    height: 43px;
    width: 48%;
  }
  @media ${device.tiny} {
    height: 40px;
    width: 115px;
  }
`

export const WhatsAppButton = styled.button`
  padding: 0 4px;
  background: ${(props) => props.theme.gradientButton.green};
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 120px;
  float: right;

  @media ${device.mobile} {
    height: 43px;
    width: 48%;
  }
  @media ${device.tiny} {
    height: 40px;
    width: 115px;
  }
`

export const ButtonIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 16px;
  margin-right: 5px;
`
