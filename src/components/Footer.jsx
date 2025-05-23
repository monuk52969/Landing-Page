import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto  text-zinc-900 border-[1px] flex items-center justify-between px-8 py-8'>
      <div className="col-1">
        <h1 className='text-2xl'>Designer.</h1>
      </div>
      <div className="col-2">
        <h1 className='text-xl'>Company</h1>
        <p className=' text-zinc-400'>About</p>
        <p className=' text-zinc-400'>Contacts</p>
        <p className=' text-zinc-400'>Careers</p>
        <p className=' text-zinc-400'>Team</p>
      </div>
      <div className="col-3">
      <h1 className='text-xl'>Designs</h1>
        <p className=' text-zinc-400'>Designs Contents</p>
        <p className=' text-zinc-400'> 1 to 1 Projects</p>
        <p className=' text-zinc-400'>Find a designer</p>
        <p className=' text-zinc-400'>Discover Inspiration</p>
      </div>
      <div className="col-4">
      <h1 className='text-xl'>Resources</h1>
        <p className=' text-zinc-400'>Become a Designer</p>
        <p className=' text-zinc-400'>Blogs</p>
        <p className=' text-zinc-400'>Designs without borders</p>
        <p className=' text-zinc-400'>99 awards</p>
      </div>
      
    </div>
  )
}

export default Footer
