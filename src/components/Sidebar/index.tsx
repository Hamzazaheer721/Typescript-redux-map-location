import { useState } from 'react'
import { Button } from 'antd'
// import { TabList } from './helper'
import 'antd/dist/antd.css'
import {
  CustomDrawer,
  Header,
  CrossIcon,
  HeaderArea,
  HeaderAreaImage,
  HeaderAreaH1
  // ListArea,
  // ListIcon,
  // ListTitle
} from './index.styled'
import MenuComponent from './Menu'

const SidebarComponent = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <CustomDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Header>
          <CrossIcon />
          <br />
          <HeaderArea>
            <HeaderAreaImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <HeaderAreaH1>
              Glen Maxwel l
              <br />
              0322-4991944
            </HeaderAreaH1>
          </HeaderArea>
        </Header>
        {/* {TabList.map((item) => (
          <ListArea>
            <ListIcon>
              {' '}
              <CrossIcon />
            </ListIcon>
            <ListTitle>{item.title}</ListTitle>
          </ListArea>
        ))} */}
        <MenuComponent />
      </CustomDrawer>
    </>
  )
}

export default SidebarComponent