// src/components/DiagnosticTable.js
import React from 'react';

const DiagnosticTable = ({ Diagnostic_List }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center pb-6 pt-6 px-4">
        <h1 className="font-bold font-manrope text-[24px] text-[#072635] leading-[19px]">Diagnostic</h1>
      </div>

      <table className="min-w-full text-left ">
        <thead className="bg-[#F6F7F8] rounded-[24px]">
          <tr>
            <th className="px-4 py-4 ">Problem/Diagnostic</th>
            <th className="px-4 py-4 ">Description</th>
            <th className="px-4 py-4 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {Diagnostic_List && Diagnostic_List.length > 0 ? (
            Diagnostic_List.map((diagnostic) => (
              <tr key={diagnostic.id} className="hover:bg-gray-100">
                <td className="px-4 py-4 ">{diagnostic.name}</td>
                <td className="px-4 py-4 ">{diagnostic.description}</td>
                <td className="px-4 py-4 ">{diagnostic.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center px-4 py-4 text-gray-500">
                No diagnostics available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticTable;
