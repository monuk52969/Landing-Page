import Image from '../assets/2.png'

const Agency = () => {
  return (
    <div className='w-full flex'>
      <div className="text w-1/2 text-zinc-900">
        <h1 className='mt-40 text-5xl ml-40'>Our <span>Agency</span></h1>
        <p className='ml-40 mt-10 text-[1.2vw] text-zinc-400'>We believe the power of data. Our <br />analytics-driven approach allows us to make <br />informed <br />Decisions and optimize your markwting <br />efforts for maximum ROI Let's turn your <br />data into actionable insights Tailored <br /> Solutions for Your Bussiness</p>
        <button className='ml-40 mt-10 px-6 py-2 border-[2px] bg-[#00DFC0] text-zinc-900 rounded-lg'>Read More</button>
      </div>
      <div className="img w-1/2">
        <img src={Image} alt="" />
      </div>

    </div>
  )
}

export default Agency
