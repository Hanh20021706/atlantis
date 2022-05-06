import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/NavAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LayoutAdmin = () => {
  return (
    <div>
     <div className="">
       <NavAdmin/>
     </div>
     <main>
       <Outlet/>
       <ToastContainer/>
     </main>
    </div>
  )
}

export default LayoutAdmin
