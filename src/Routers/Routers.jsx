import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content } from '../Components/Content/Content'
import { Navbar } from '../Components/Navbar/Navbar'

export const Routers = () => {

  
  return (
    <>
    
        <Navbar/>
        <br />
        <Routes>
            <Route path='/' element= {<Content dude= {true}/>}/>
            <Route path='/content/:id' element= {<Content dude={false}/>}/>
        </Routes>
    </>
  )
}


