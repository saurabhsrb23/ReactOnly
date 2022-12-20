import React from 'react'
import './landingBanner.css'
import { useNavigate } from 'react-router-dom'
const LandingBanner = () => {
  const navigate=useNavigate()

  const navigateToContent=()=>{
    navigate('/content')
  }
  return (
    <>
    <section className='landingBanner'>
    <section className='leftBanner'>
        <img src={require('../../images/banner.jpg')} alt="Banner" />
    </section>
    <section className='RightBanner'>
        <div className='Heading'>10x Team 04</div>
        <div className='btnDiv'>
          <button onClick={navigateToContent}>Enter</button>
        </div>
    </section>
    </section>
    </>
  )
}

export default LandingBanner