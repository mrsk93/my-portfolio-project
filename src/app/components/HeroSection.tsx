import React from 'react'
import Image from "next/image";

function HeroSection() {
  return (
    <section className='hero-section'>
        <h3 className='hero-section-heading'>Hi all, I am Sumit Chalotra</h3>
        <Image
            className="hero-banner-img"
            src={""}
            alt={"hero-banner-img"}
            fill={true}
         />
    </section>
  )
}

export default HeroSection