import React from 'react';
import Download from '../../src/assets/images/download.svg'; // Importing the download icon image

const ResultListing = ({ reports }) => {
  // Ensure reports is an array and has lab_results
  return (
    <div className="container mx-auto bg-white overflow-hidden rounded-[16px] p-4">
      <div className="flex justify-between items-center mb-4 pt-4">
        <h1 className="font-bold font-manrope text-[24px] text-[#072635] leading-[19px]">Lab Results</h1>
      </div>

      <div className="bg-white overflow-auto">
        {reports && reports.length > 0 ? ( // Check if reports array is not empty
          reports.map((result, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-100">
              <div className="flex items-center">
                <div className="text-left">
                  <p className="font-normal font-manrope text-[14px] text-[#072635] leading-[19px]">{result}</p> {/* Display report name */}
                </div>
              </div>
              <a
                href={result.downloadUrl}
                className="text-black hover:text-gray-800 focus:outline-none font-bold"
                download
              >
                <img src={Download} alt="Download" className="w-4 h-4" />
              </a> {/* Download button linking to report's download URL */}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No lab results available.</p> // Fallback if no reports
        )}
      </div>
    </div>
  );
};

export default ResultListing;
