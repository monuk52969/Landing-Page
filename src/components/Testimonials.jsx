import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow buttons
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-40px] top-[40%] z-10 cursor-pointer"
    onClick={onClick}
  >
    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-40px] top-[40%] z-10 cursor-pointer"
    onClick={onClick}
  >
    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className="p-2">
      <div className="card w-full h-[16vw] border-[2px] rounded-lg drop-shadow-xl flex relative">
        <div className="img">
          <img
            className="w-[3vw] h-[7vh] object-cover rounded-full mt-8 ml-10"
            src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60"
            alt="client"
          />
        </div>

        <div className="text ml-8 mt-8 leading-tight">
          <h1 className="text-lg text-zinc-900">Rose Chelvort</h1>
          <p className="text-zinc-600">Executive</p>
        </div>

        <div className="p-btn absolute mt-24 ml-8 w-[85%]">
          <p className="text-[1vw] text-zinc-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sed unde
            voluptatum tenetur pariatur ea quas impedit saepe nulla magnam.
          </p>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-[1vw] h-[1vw] fill-yellow-400"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full h-auto bg-[#ffffff] relative px-12 pb-20">
      <div className="heading text-4xl text-center mt-20">
        <h1 className="text-zinc-900">
          What <span className="text-[#00DFC0]">Client</span> Says
        </h1>
        <div className="para text-zinc-600 mt-4 text-[18px]">
          <p>See how our digital marketing Agency Helped</p>
          <p>Clients Achieve Our Goals</p>
        </div>
      </div>

      <div className="relative mt-20">
        <Slider {...settings}>{cards}</Slider>
      </div>
    </div>
  );
};

export default Testimonials;
