import "./MainLayout.css"
import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "./Navbar/Navbar";

const MainLayout = () => {
  return (
    <>

      <div className="mainLayout">

        <Navbar />

        <div className="content">

          <Outlet />

        </div>

      </div>

    </>

  )
}

export default MainLayout