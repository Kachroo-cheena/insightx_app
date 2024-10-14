import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  const reports = [
    {
      id: '0097735-2024-10',
      status: 'Complete',
      patientName: 'Leelaben Jesing',
      gender: 'Female',
      age: 75,
      uploadTime: '12-10-2024 14:10',
      createdOn: '1 d',
    },
    {
      id: '0097734-2024-10',
      status: 'Complete',
      patientName: 'Paresh Rajput',
      gender: 'Male',
      age: 42,
      uploadTime: '12-10-2024 13:45',
      createdOn: '1 d',
    },
    // Additional report data here
  ];

  const navigate = useNavigate();
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Reports</h1>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'Pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleTabSwitch('Pending')}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'Complete' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleTabSwitch('Complete')}
          >
            Complete
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-md shadow-md flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="ID"
          className="border border-gray-300 rounded-md p-2 w-32 focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Patient Name"
          className="border border-gray-300 rounded-md p-2 w-64 focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Upload Time"
          className="border border-gray-300 rounded-md p-2 w-64 focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Body Part"
          className="border border-gray-300 rounded-md p-2 w-64 focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Technician Name"
          className="border border-gray-300 rounded-md p-2 w-64 focus:ring focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Filter</button>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Upload Time</th>
              <th className="px-6 py-3">Created On</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-t cursor-pointer hover:bg-gray-200" onClick={()=>{
                navigate(`/reports/${report.id}`)
              }}>
                <td className="px-6 py-4">{report.id}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      report.status === 'Complete' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4">{report.patientName}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      report.gender === 'Female' ? 'bg-gray-100 text-gray-700' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {report.gender}
                  </span>
                </td>
                <td className="px-6 py-4">{report.age}</td>
                <td className="px-6 py-4">{report.uploadTime}</td>
                <td className="px-6 py-4">{report.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-white p-4 flex justify-between items-center border-t">
          <p className="text-gray-600">20 of 6227</p>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Previous</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
