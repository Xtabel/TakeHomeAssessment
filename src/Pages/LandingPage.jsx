import React from 'react'
import Hero from '../Components/Hero'
import FeaturedProjects from '../Components/FeaturedProjects'
import { useDataLayerValue } from '../@app/ContextApi/DataLayer'


const LandingPage = () => {
  const [{ userLoggedIn }] = useDataLayerValue();

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {userLoggedIn ? <FeaturedProjects /> :
        <>
          <Hero />
          <FeaturedProjects />
        </>}
    </div>
  )
}

export default LandingPage