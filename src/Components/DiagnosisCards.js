// src/components/IconTextLayout.js
import React from 'react';
import Heart from '../../src/assets/images/respiratory.svg'; 
import Temp from '../../src/assets/images/temperature.svg'; 
import Bpm from '../../src/assets/images/HeartBPM.svg'; 


const CardLayout = () => {
  return (
    <div className="p-0 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-[12px] flex flex-col items-start bg-[#E0F3FA]">
            <img src={Heart} alt="" className="h-[96px] w-auto mb-7" />
            <div className="text-base font-manrope text-[16px] text-[#072635] leading-[19px] mb-3">Respiratery Rate</div>
            <h2 className="text-xl font-bold font-manrope text-[30px] text-[#072635] leading-[19px] mb-5">20 Bpm</h2>
            <div className="text-base font-manrope text-[14px] text-[#072635] leading-[19px]">Normal</div>
          </div>

          <div className="p-6 rounded-[12px] flex flex-col items-start bg-[#FFE6E9]">
            <img src={Temp} alt="" className="h-[96px] w-auto mb-7" />
            <div className="text-base font-manrope text-[16px] text-[#072635] leading-[19px] mb-3">Temprature</div>
            <h2 className="text-xl font-bold font-manrope text-[30px] text-[#072635] leading-[19px] mb-5">98.6F</h2>
            <div className="text-base font-manrope text-[14px] text-[#072635] leading-[19px]">Normal</div>
          </div>

          <div className="p-6 rounded-[12px] flex flex-col items-start bg-[#FFE6E9]">
            <img src={Bpm} alt="" className="h-[96px] w-auto mb-7" />
            <div className="text-base font-manrope text-[16px] text-[#072635] leading-[19px] mb-3">Heart Rate</div>
            <h2 className="text-xl font-bold font-manrope text-[30px] text-[#072635] leading-[19px] mb-5">78 Bpm</h2>
            <div className="text-base font-manrope text-[14px] text-[#072635] leading-[19px]">Normal</div>
          </div>
      </div>
    </div>
  );
};

export default CardLayout;
