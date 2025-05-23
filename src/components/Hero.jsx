import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[#ffffff] relative text-zinc-900 flex'>
        <div className="header w-1/2">
           <h1 className='mt-[10vw] ml-[7vw] text-6xl'>We Create</h1>           
           <h1 className='ml-[7vw] text-6xl'><span className='text-[#00DFC0]'>Solution</span>  for </h1>           
           <h1 className='ml-[7vw] text-6xl'>Your Bussiness</h1>     
           <p className='ml-[7vw] mt-6 text-[1.2vw] text-zinc-400'>Our team keeps a keen eye on emerging trends <br /> technologies to ensure your marketing  <br />  compaign remains cutting-edge</p>  
           <button className='ml-[7vw] mt-6 bg-[#00DFC0] px-6 py-1 text-white rounded-lg'>Get Start</button>    
           <div className="expo">
            <h1 className='ml-[7vw] mt-28'>↓ Explore More</h1>
           </div>
        </div>

        <div className="img">
            <img className='w-full h-full bg-cover' src="https://img.freepik.com/free-vector/design-tools-concept-illustration_114360-1227.jpg?t=st=1746639932~exp=1746643532~hmac=b6da8779f729d10018692ab207f1750b731ba61dc29b2c79625636ede195d6a4&w=826" alt="" />
        </div>
      
    </div>
  )
}

export default Hero
