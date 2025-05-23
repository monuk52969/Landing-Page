import { motion } from "framer-motion";

const Cards = () => {
  return (
    <motion.div data-scroll data-scroll-speed="-.1" className="w-full h-screen bg-[#ffffff] relative">
      {/* Heading Section */}
      <div className="heading text-4xl">
        <h1 className="text-zinc-900 flex items-center justify-center mt-20 text-lg sm:text-2xl md:text-4xl">
          We provide the best <span className="text-[#00DFC0] ml-1">Services</span>
        </h1>
        <div className="para text-zinc-600">
          <p className="flex items-center justify-center leading-none text-sm sm:text-base md:text-lg mt-4">
            Let us unleash the full potential of your business
          </p>
          <p className="flex items-center justify-center text-sm sm:text-base md:text-lg">
            with our data-driven strategies
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards flex flex-col gap-10 sm:flex-row sm:gap-16 mt-10 sm:mt-28 items-center justify-center text-zinc-900">
        <div className="card w-full sm:w-[20vw] h-[16vw] sm:h-[16vw] border-[2px] rounded-lg drop-shadow-xl relative">
          <h1 className="ml-6 mt-6 text-xl sm:text-2xl">SEO / Sem</h1>
          <p className="ml-6 mt-5 text-zinc-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur dicta ut ullam, libero
            temporibus.
          </p>
          <button className="ml-5 mt-5 px-4 py-2 border-[2px] rounded-lg bg-[#00DFC0] text-sm sm:text-base">
            Start
          </button>
        </div>

        <div className="card w-full sm:w-[20vw] h-[16vw] sm:h-[16vw] border-[2px] rounded-lg drop-shadow-xl relative">
          <h1 className="ml-6 mt-6 text-xl sm:text-2xl">Marketing</h1>
          <p className="ml-6 mt-5 text-zinc-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur dicta ut ullam, libero
            temporibus.
          </p>
          <button className="ml-5 mt-5 px-4 py-2 border-[2px] rounded-lg bg-[#00DFC0] text-sm sm:text-base">
            Start
          </button>
        </div>

        <div className="card w-full sm:w-[20vw] h-[16vw] sm:h-[16vw] border-[2px] rounded-lg drop-shadow-xl relative">
          <h1 className="ml-6 mt-6 text-xl sm:text-2xl">Viral Campaign</h1>
          <p className="ml-6 mt-5 text-zinc-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur dicta ut ullam, libero
            temporibus.
          </p>
          <button className="ml-5 mt-5 px-4 py-2 border-[2px] rounded-lg bg-[#00DFC0] text-sm sm:text-base">
            Start
          </button>
        </div>

        <div className="card w-full sm:w-[20vw] h-[16vw] sm:h-[16vw] border-[2px] rounded-lg drop-shadow-xl relative">
          <h1 className="ml-6 mt-6 text-xl sm:text-2xl">Others</h1>
          <p className="ml-6 mt-5 text-zinc-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur dicta ut ullam, libero
            temporibus.
          </p>
          <button className="ml-5 mt-5 px-4 py-2 border-[2px] rounded-lg bg-[#00DFC0] text-sm sm:text-base">
            Start
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
