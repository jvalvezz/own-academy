import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu/SideMenu'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <SideMenu />

      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout