import React from 'react';
import { useParams } from 'react-router-dom';

const ReportDetail = () => {
  const { reportId } = useParams();

  // Fetch report details using reportId
  const reportDetails = {
    id: reportId,
    status: 'Need More Info',
    doctorFeedback: 'history?',
    patient: { firstName: 'Madhuri', lastName: 'Singh', gender: 'Female', age: 55 },
    xrayImages: [
      { side: 'LEFT', url: 'https://via.placeholder.com/150' },
      { side: 'RIGHT', url: 'https://via.placeholder.com/150' },
    ],
    // Add more detailed data
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Report ID: {reportDetails.id}</h1>
      <p className="text-lg mb-4 text-gray-600">Status: {reportDetails.status}</p>
      <p className="text-lg mb-8 text-gray-600">
        Doctor's Feedback: <span className="text-blue-600">{reportDetails.doctorFeedback}</span>
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Patient Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-700">Name:</p>
            <p className="text-gray-600">{reportDetails.patient.firstName} {reportDetails.patient.lastName}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Gender:</p>
            <p className="text-gray-600">{reportDetails.patient.gender}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Age:</p>
            <p className="text-gray-600">{reportDetails.patient.age}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4">X-ray Files</h2>
        <div className="grid grid-cols-2 gap-4">
          {reportDetails.xrayImages.map((xray, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-700 mb-2">Side: {xray.side}</p>
              <img src={xray.url} alt={`${xray.side} X-ray`} className="rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
        Save
      </button>
    </div>
  );
};

export default ReportDetail;
