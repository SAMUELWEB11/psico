import React, { useState } from 'react';
import AuthSelector from './components/AuthSelector';
import PsychologistLogin from './components/PsychologistLogin';
import PsychologistDashboard from './components/PsychologistDashboard';
import PatientPortal from './components/PatientPortal';

const App = () => {
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, { ...newPatient, id: Date.now(), diagnosis: '' }]);
  };

  const handleUpdateDiagnosis = (id, diagnosis) => {
    setPatients(patients.map(patient => 
      patient.id === id ? { ...patient, diagnosis } : patient
    ));
  };

  if (!userType) {
    return <AuthSelector onSelect={setUserType} />;
  }

  if (userType === 'psychologist' && !isLoggedIn) {
    return <PsychologistLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  if (userType === 'psychologist' && isLoggedIn) {
    return (
      <PsychologistDashboard 
        patients={patients} 
        onAddPatient={handleAddPatient} 
        onUpdateDiagnosis={handleUpdateDiagnosis} 
      />
    );
  }

  if (userType === 'patient') {
    return <PatientPortal />;
  }

  return null;
};

export default App;

// DONE