import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterClient from '../../components/FooterClient'
import HeaderClient from '../../components/HeaderClient'

const LayoutClient = () => {
  return (
    <div>
     <header>
         <HeaderClient/>
     </header>
     <main>
         <Outlet/>
     </main>
     <footer>
         <FooterClient/>
     </footer>
    </div>
  )
}

export default LayoutClient
