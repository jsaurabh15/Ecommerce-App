import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title='Privacy Policy' >
     <div className="row contactus">
      <div className="col-md-6">
        <img src="/images/contactus.jpeg" alt="Privacy Policy" style={{width:"100%"}} />
      </div>
      <div className="col-md-4">
        <p className='mt-3'>Privacy Policy 1</p>
        <p className='mt-3'>Privacy Policy 2</p>
        <p className='mt-3'>Privacy Policy 3</p>
        <p className='mt-3'>Privacy Policy 4</p>
        <p className='mt-3'>Privacy Policy 5</p>
        <p className='mt-3'>Privacy Policy 6</p>
        <p className='mt-3'>Privacy Policy 7</p>
      </div>
     </div>
    </Layout>
  )
}

export default Policy
