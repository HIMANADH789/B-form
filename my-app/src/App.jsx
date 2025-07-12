import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './Form';
import ThankYou from './ThankYou';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/form" replace />} />
      <Route path="/form" element={<Form />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
