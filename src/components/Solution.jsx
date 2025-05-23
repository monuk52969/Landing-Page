import Image from "../assets/1.png";

const Solution = () => {
  return (
    <div className=' w-full border-t-[3px] border-b-[3px] bg-[#d5f8f4] border-[#bcede6] text-zinc-900 flex relative'>
        <div className="img w-1/2">
        <div className="w-[400px] h-[600px] ml-20 mb-10">
  <img className='w-full h-full bg-cover mt-20' src={Image} alt="" />
</div>
        </div>
        <div className="text w-1/2 ml-48 mt-24">
            <h1 className='text-5xl font-semibold'> Simple <span className='text-[#00DFC0]'>Solution!</span></h1>
            <p className='text-lg linehe leading-tight mt-8'>We Understand that no two bussiness <br />are alike. That's Why we take the <br /> time to Understand</p>
            <div className="btn flex">
                <button className='w-6 h-6 rounded-full bg-[#00DFC0] text-white text-[1vw] mt-8'>1</button>
                <h2 className='ml-8 mt-7'>Contact Us</h2>                
            </div>
            <div className="text">
                <p className='ml-14 leading-3 text-zinc-500 text-[14px]'>Contact us boost ypur brand Visibilty</p>
            </div>

            <div className="btn flex">
                <button className='w-6 h-6 rounded-full bg-[#00DFC0] text-white text-[1vw] mt-8'>2</button>
                <h2 className='ml-8 mt-7'>Contact Us</h2>                
            </div>
            <div className="text">
                <p className='ml-14 leading-3 text-zinc-500 text-[14px]'>Contact us boost ypur brand Visibilty</p>
            </div>

            <div className="btn flex">
                <button className='w-6 h-6 rounded-full bg-[#00DFC0] text-white text-[1vw] mt-8'>3</button>
                <h2 className='ml-8 mt-7'>Contact Us</h2>                
            </div>
            <div className="text">
                <p className='ml-14 leading-3 text-zinc-500 text-[14px]'>Contact us boost ypur brand Visibilty</p>
            </div>

            <div className="btn flex">
                <button className='w-6 h-6 rounded-full bg-[#00DFC0] text-white text-[1vw] mt-8'>4</button>
                <h2 className='ml-8 mt-7'>Contact Us</h2>                
            </div>
            <div className="text">
                <p className='ml-14 leading-3 text-zinc-500 text-[14px]'>Contact us boost ypur brand Visibilty</p>
            </div>
            <div className="btns">
                <button className='px-6 py-2 mt-10 border-[1px] text-white bg-[#00DFC0] rounded-lg'>Get Start</button>
                <button className='px-6 py-2 mt-10 border-[2px] border-[#00DFC0] ml-10 text-zinc-900  rounded-lg'>Read More</button>
            </div>
        </div>
      
    </div>
  )
}

export default Solution

