import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Exp from './components/Exp'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Article from './components/Articles'

const App = () => {
  


  return (
    
    
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
          
          
          <div className="container mx-auto px-8">
          <Navbar/>
          <section id ="about"><Hero/></section>
          
          <section id="edu"><Education/></section>
          <section id="exp"><Exp/></section>
          <section id="tech"><Technologies/></section>
          <section id="proj"><Projects/></section>
          <section id="art"><Articles/></section>
          <section id="con"><Contact/></section>
         
          </div>
          
          
    </div>
  )
}

export default App
