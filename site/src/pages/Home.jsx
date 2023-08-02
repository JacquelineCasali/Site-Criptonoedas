import React from 'react'
import Hearder from "../components/Hearder"
import Hero from '../components/Hero'
import Featured from "../components/Featured"
import Singup from "../components/Singup"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
    <Hearder/>
    <Hero/>
     <Featured/>
     <Singup/>
     <Footer/>
    </div>
  )
}
