import React, { useRef, useState } from 'react'

function Home() {
    const idRef = useRef()
  return (
    <div>
        <div className='homePage' style={{height:"100dvh", alignItems:"center", display:"flex", justifyContent:"center"}}>
             <div className='  rounded contentBox py-5' style={{minWidth:"40%", maxWidth:"100%"}}>
                <div className='text-center'>
                    <h1 className='text-light'>Enter your ID</h1>
                </div>
                <div className='px-5 mt-4'>
                    <input type='text' ref={idRef} className=' p-md-3 p-1 inputBox' style={{width:"100%"}}  />
                </div>
                <div className='text-center mt-5 mb-3  d-flex justify-content-evenly px-5 mx-5 flex-wrap'>
                    <button className='submitButton p-md-2 px-md-3 W-100' >Create new ID</button>
                    <button className='submitButton p-md-2 px-md-3 W-100' >Login</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Home;