import React from 'react'
import {Outlet, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import { Footer, Header } from './components'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App