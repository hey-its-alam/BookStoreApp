import React from 'react'
import Home from './home/Home'
import './App.css'

import {Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider.jsx'
import ContactForm from './components/ContactForm.jsx'


function App() {
const [authUser,setAuthUser]=useAuth();
    console.log("Navbar user:",authUser);

  return (
    <>
   
   {/* <Home/>
   <Course/> */}
   <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/course" element={authUser?<Courses/>:<Navigate to ="/signup"/>}/>
    <Route path="/contact" element={<ContactForm />} />
    <Route path ="/signup" element={<Signup/>}/>
   </Routes>
   <Toaster/>
    </>
  )
}

export default App
