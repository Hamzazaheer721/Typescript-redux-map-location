import Drawer from 'antd/lib/drawer'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    /* i'll change it latter */
    background-color: #85868c;
  }
  .ant-drawer-body {
    padding: 0;
    --ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    height: 80vh;
  }

  .ant-drawer-body::-webkit-scrollbar {
    display: none;
  }

  .ant-drawer-content {
    border-radius: 0px 15px 15px 0px;
    background: ${(props) => props.theme.color.white} 0% 0% no-repeat
      padding-box;
  }
`
export const Header = styled.p`
  background-color: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.theme.sidebarColor.blue};
  padding: 10px;
  margin-bottom: 27px;
`

export const CrossIcon = styled.div`
  float: right;
  cursor: pointer;
`

export const HeaderArea = styled.p`
  /* flex-shrink: 0; */
  display: flex;
  padding: 6px;
  width: 100%;
`

export const HeaderAreaImage = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  flex: 1;
`

export const HeaderAreaH1 = styled.h1`
  font-size: 100%;
  font-weight: 500;
  color: white;
  margin: 0 7px;
  flex: 4;
`

export const ListArea = styled.p`
  display: flex;
  color: #000000;

  &:hover {
    color: #1b9bd7;
  }
  &p:focus {
    color: #1b9bd7;
  }
`

export const ListIcon = styled(FontAwesomeIcon)`
  flex: 1;
  margin-right: 5%;
  padding: 5px;
`

export const ListTitle = styled.p`
  flex: 4;
  margin-bottom: 0;
`

export const ArrowLeftIcon = styled(FontAwesomeIcon)`
  &.anticon {
    svg {
      fill: ${(props) => props.theme.color.primary};
      margin: auto 10px;
      font-size: 1.2rem;
      margin: 1px 10px 0 10px;
      cursor: pointer;
    }
  }
`

export const WatiImage = styled.img`
  width: 85%;
`
export const ContainerImage = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`
