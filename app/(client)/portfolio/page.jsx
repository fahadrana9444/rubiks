import HeroSection from '@/components/HeroSection'
import Portfolio from '@/components/Portfolio'
import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        <HeroSection title='OUR WALL OF PRIDE AND CREATIVITY' description={"When we say that Rubik’s is a leading custom software development solution provider in the India, there’s a reason behind it - Our work. "} />
      </div>
      <div>
        <Portfolio />
      </div>
    </div>
  )
}
