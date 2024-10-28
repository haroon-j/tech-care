import React, { useState } from "react";
import logo from '../../src/assets/images/Logo.svg'; 
import avatar from '../../src/assets/images/avatar.png';
import Home from '../../src/assets/images/home.svg'; 
import User from '../../src/assets/images/user.svg'; 
import Calendar from '../../src/assets/images/calendar.svg'; 
import Chat from '../../src/assets/images/chat.svg'; 
import Card from '../../src/assets/images/credit_card.svg'; 
import Setting from '../../src/assets/images/setting.png'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between rounded-[70px]">
      {/* Left section: Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Center section: Navigation menu */}
      <div className="relative">
        <button 
          className="flex items-center justify-between p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0] md:hidden"
          onClick={toggleDropdown}
        >
          Menu
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <nav className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
           <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"> <img src={Home} alt="Overview" className="h-4 w-auto" /></span> 
            Overview
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"> <img src={User} alt="Patients" className="h-4 w-auto" /></span> 
            Patients
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Calendar} alt="Schedule" className="h-4 w-auto" /></span> 
            Schedule
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Chat} alt="Message" className="h-4 w-auto" /></span> 
            Message
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Card} alt="Transactions" className="h-4 w-auto" /></span> 
            Transactions
          </a>
          </nav>
        )}

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide font-manrope font-bold text-[14px] text-[#072635] leading-[19px]">
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"> <img src={Home} alt="Overview" className="h-4 w-auto" /></span> 
            Overview
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"> <img src={User} alt="Patients" className="h-4 w-auto" /></span> 
            Patients
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Calendar} alt="Schedule" className="h-4 w-auto" /></span> 
            Schedule
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Chat} alt="Message" className="h-4 w-auto" /></span> 
            Message
          </a>
          <a href="/" className="flex items-center p-3 rounded-full text-[#072635] hover:text-gray-900 hover:bg-[#01F0D0]">
            <span className="material-icons mr-1"><img src={Card} alt="Transactions" className="h-4 w-auto" /></span> 
            Transactions
          </a>
        </nav>
      </div>

      {/* Right section: User profile */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src={avatar} alt="Profile" className="h-10 w-10 rounded-full" />
          <div className="hidden text-left md:block">
            <span className="block text-sm font-semibold text-gray-900">Dr. Jose Simmons</span>
            <span className="block text-sm text-gray-500">General Practitioner</span>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-900">
          <span className="material-icons">
            <img src={Setting} alt="Setting" className="h-4 w-auto" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
