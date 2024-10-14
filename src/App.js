import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterSelection from './components/RegisterSelection';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import Reports from './components/Reports';
import ReportDetail from './components/ReportDetailsComplete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterSelection />} />
        <Route path="/register/:role" element={<RegisterForm />} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/reports/:reportId" element={<ReportDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
