import React from 'react'
import Navbar from './_components/Navbar';
import { Hero } from './_components/Hero';

const Home = () => {
  return (
    <div className="flex flex-col space-y-2">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home;