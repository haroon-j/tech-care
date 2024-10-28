import React from 'react';
import { AiOutlineEllipsis, AiOutlineSearch } from 'react-icons/ai';
import avatar from '../../src/assets/images/avatar.png'; // Importing the avatar image

// Sample patient data with images
const patients = [
  { id: 1, name: 'John Doe', age: 30, image: avatar },
  { id: 2, name: 'Jane Smith', age: 25, image: avatar },
  { id: 3, name: 'Emily Johnson', age: 40, image: avatar },
  { id: 4, name: 'Michael Brown', age: 35, image: avatar },
  { id: 5, name: 'John Doe', age: 30, image: avatar },
  { id: 6, name: 'Jane Smith', age: 25, image: avatar },
  { id: 7, name: 'Emily Johnson', age: 40, image: avatar },
  { id: 8, name: 'Michael Brown', age: 35, image: avatar },
  { id: 9, name: 'John Doe', age: 30, image: avatar },
  { id: 10, name: 'Jane Smith', age: 25, image: avatar },
  { id: 11, name: 'Emily Johnson', age: 40, image: avatar },
  { id: 12, name: 'Michael Brown', age: 35, image: avatar },
  { id: 13, name: 'Emily Johnson', age: 40, image: avatar },
];

const PatientListing = () => {
  return (
    <div className="container mx-auto ">
      
      <div className="flex justify-between items-center mb-4 pt-4 px-4">
            <h1 className="font-bold font-manrope  text-[24px] text-[#072635] leading-[19px]">Patient</h1>
            <button className="text-black hover:text-gray-800 focus:outline-none">
            <AiOutlineSearch size={24} />
            </button>
        </div>
        
      <div className="bg-white overflow-auto">
        
        {patients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-4 hover:bg-gray-100">
            <div className="flex items-center">
              <img src={patient.image} alt={`${patient.name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
              <div className='text-left'>
                <p className="font-semibold font-manrope text-[14px] text-[#072635] leading-[19px]">{patient.name}</p>
                <p className="font-manrope text-[14px] text-[#707070]">{patient.age} years</p>
              </div>
            </div>
            <button className="text-black hover:text-gray-800 focus:outline-none font-bold">
              <AiOutlineEllipsis size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientListing;
