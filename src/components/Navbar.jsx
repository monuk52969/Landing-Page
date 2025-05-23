import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev); // Toggling the menu state
  };

  return (
    <div className='navbar w-full flex items-center justify-between px-[2vw] py-2 border-b-[1px] rounded-full shadow-lg text-zinc-900 sticky'>
      {/* Logo */}
      <div className='logo'>
        <h2 className='text-zinc-900'>Designer.</h2>
      </div>

      {/* Links (desktop view) */}
      <div className="links hidden md:flex gap-5">
        <p>Home</p>
        <p>Services</p>
        <p>Work</p>
        <p>Projects</p>
      </div>

      {/* Button (desktop view) */}
      <button className='hidden md:block border-[1px] bg-[#00DFC0] text-white border-zinc-300 px-2 py-1 rounded-lg'>
        Lets Discuss
      </button>

      {/* Hamburger Icon (mobile view) */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={handleMenuToggle} className="text-zinc-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (show when isMenuOpen is true) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg text-zinc-900 p-5`}>
        <p className="mb-4">Home</p>
        <p className="mb-4">Services</p>
        <p className="mb-4">Work</p>
        <p className="mb-4">Projects</p>
        <button className='w-full border-[1px] bg-[#00DFC0] text-white border-zinc-300 px-2 py-1 rounded-lg'>
          Lets Discuss
        </button>
      </div>
    </div>
  );
};

export default Navbar;
