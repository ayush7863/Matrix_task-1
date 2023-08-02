import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

// import Token from '../Pages/Token'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/token" element={<Token/>}/> */}
       
       </Routes>
  )
}

export default AllRoute