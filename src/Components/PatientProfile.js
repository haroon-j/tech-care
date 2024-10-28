import React, { useEffect, useState } from 'react';
import Birth from '../../src/assets/images/BirthIcon.svg';
import FemaleIcon from '../../src/assets/images/FemaleIcon.svg';
import PhoneIcon from '../../src/assets/images/PhoneIcon.svg';
import InsuranceIcon from '../../src/assets/images/InsuranceIcon.svg';

const PatientProfile = ({ profileData, loading1, error1 }) => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (profileData !== null) {
      setPatientData(profileData);
      setLoading(loading1);
      setError(error1);
    }
  }, [profileData, loading1, error1]); // Add loading1 and error1 here

  return (
    <div className="container mx-auto bg-white overflow-hidden rounded-[16px] p-4 mb-5">
      <div className="flex flex-col items-center mb-6">
        {patientData && patientData.profile_picture ? (
          <img
            src={patientData.profile_picture}
            alt="Patient"
            className="w-[200px] h-[200px] rounded-full mb-2"
          />
        ) : (
          <div className="w-[200px] h-[200px] rounded-full bg-gray-200 mb-2 flex items-center justify-center">
            <span>Loading...</span>
          </div>
        )}
        <h1 className="text-2xl font-bold text-[#072635]">{patientData ? patientData.name : 'Loading...'}</h1>
      </div>

      {loading && <p className="text-center text-gray-500">Loading patient data...</p>}
      {error && <p className="text-center text-red-500">Error: {error.message}</p>}

      <div className="p-4">
        <div>
          {patientData && (
            <>
              <div className="flex items-center p-2 hover:bg-gray-100">
                <img src={Birth} alt="Date of Birth" className="w-10 h-10 mr-2" />
                <div className="ml-2 text-left">
                  <span className="text-base font-normal text-[#072635]">Date of Birth</span>
                  <p className="text-sm font-medium text-gray-500">{new Date(patientData.date_of_birth).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</p>
                </div>
              </div>
              <div className="flex items-center p-2 hover:bg-gray-100">
                <img src={FemaleIcon} alt="Gender" className="w-10 h-10 mr-2" />
                <div className="ml-2 text-left">
                  <span className="text-base font-normal text-[#072635]">Gender</span>
                  <p className="text-sm font-medium text-gray-500">{patientData.gender}</p>
                </div>
              </div>
              <div className="flex items-center p-2 hover:bg-gray-100">
                <img src={PhoneIcon} alt="Contact Info" className="w-10 h-10 mr-2" />
                <div className="ml-2 text-left">
                  <span className="text-base font-normal text-[#072635]">Contact Info</span>
                  <p className="text-sm font-medium text-gray-500">{patientData.phone_number}</p>
                </div>
              </div>
              <div className="flex items-center p-2 hover:bg-gray-100">
                <img src={PhoneIcon} alt="Emergency Contact" className="w-10 h-10 mr-2" />
                <div className="ml-2 text-left">
                  <span className="text-base font-normal text-[#072635]">Emergency Contact</span>
                  <p className="text-sm font-medium text-gray-500">{patientData.emergency_contact}</p>
                </div>
              </div>
              <div className="flex items-center p-2 hover:bg-gray-100">
                <img src={InsuranceIcon} alt="Insurance Provider" className="w-10 h-10 mr-2" />
                <div className="ml-2 text-left">
                  <span className="text-base font-normal text-[#072635]">Insurance Provider</span>
                  <p className="text-sm font-medium text-gray-500">{patientData.insurance_type}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
