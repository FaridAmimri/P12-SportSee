import TopBar from '../topBar/TopBar'
import styled from 'styled-components'
import SideBar from '../sideBar/SideBar'

const NavTop = styled.div`
  display: flex;
  height: 91px;
  min-width: 1024px;
  background-color: #020203;
`

const NavSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  width: 117px;
  min-height: 800px;
  position: absolute;
  top: 90px;
  background-color: #020203;
`

function Nav() {
  return (
    <>
      <NavTop className="nav-top">
        <TopBar />
      </NavTop>
      <NavSide className="nav-side">
        <SideBar />
      </NavSide>
    </>
  )
}

export default Nav