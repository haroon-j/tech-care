import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Header/Nav';
import PatientListing from './Components/PatientSidebar.js';
import DiagnosticTable from './Components/DiagnosticList.js';
import BloodPressureChart from './Components/Diagnosis.js';
import CardLayout from './Components/DiagnosisCards.js';
import ResultListing from './Components/Results.js';
import PatientProfile from './Components/PatientProfile.js';

function App() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('coalition:skills-test'), // Encoding Basic Auth
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        

        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data
        const jessica = data.find(user => user.name === 'Jessica Taylor');
        console.log("jessica",jessica)
        setPatientData(jessica);
      } catch (error) {
        console.error("Fetch error:", error); // Log any fetch error
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App p-4">
      <div className='header'>
        <Navbar />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {/* Patient Listing */}
        <div className="w-full md:w-[360px] bg-white shadow-md rounded-[16px] overflow-hidden">
          <div className='overflow-y-auto h-full'>
            <PatientListing />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className='w-full bg-white shadow-md overflow-hidden rounded-[16px] mb-6 p-4'>
              {patientData && patientData.diagnosis_history ? (
                  <BloodPressureChart diagnosis_history={patientData.diagnosis_history} />
                ) : (
                  <div className="p-4 text-gray-500">No diagnosis history available.</div>
                )}
                <CardLayout />
              </div>

              <div className='w-full bg-white shadow-md overflow-hidden rounded-[16px]'>
              {patientData && patientData.diagnostic_list ? (
                  <DiagnosticTable Diagnostic_List={patientData.diagnostic_list} />
                ) : (
                  <div className="p-4 text-gray-500">No diagnostics available.</div>
                )}
              </div>
            </div>

            {/* Right Sidebar for Patient Profile and Results */}
            <div className="w-full md:w-[360px]">
              <div className='w-full mb-4'>
                <PatientProfile profileData={patientData}  loading1={loading} error1={error}/>
              </div>
              <div className='w-full'>
              {patientData && patientData.lab_results ? (
                  <ResultListing reports={patientData.lab_results} />
                ) : (
                  <div className="p-4 text-gray-500">No reports available.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
