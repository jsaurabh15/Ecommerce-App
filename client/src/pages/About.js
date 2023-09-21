import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title="About Us" >
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="About us" style={{width:'100%'}} />
        </div>
        <div className="col-md-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea mollitia maxime unde molestias vero distinctio, quia et rerum veritatis reprehenderit similique delectus. Necessitatibus quis dolores sint assumenda itaque odit magnam porro quos error maxime? Excepturi porro cupiditate rem, nobis voluptatum ratione sed ipsam, ipsa perferendis quisquam quia dolorem pariatur et.</p>
        </div>
      </div>
    </Layout>
  )
}


export default About
