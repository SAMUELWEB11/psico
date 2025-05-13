const PsychologistDashboard = ({ patients, onAddPatient, onUpdateDiagnosis }) => {
  const [activeTab, setActiveTab] = useState('patients');
  const [newPatient, setNewPatient] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleAddPatient = (e) => {
    e.preventDefault();
    onAddPatient(newPatient);
    setNewPatient({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Panel del Psicólogo</h1>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">Cerrar Sesión</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('patients')}
            className={`py-4 px-6 font-medium ${activeTab === 'patients' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Mis Pacientes
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-4 px-6 font-medium ${activeTab === 'appointments' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Citas
          </button>
        </div>

        {activeTab === 'patients' && (
          <div className="mt-6">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Añadir Nuevo Paciente</h2>
              <form onSubmit={handleAddPatient} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newPatient.name}
                      onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newPatient.email}
                      onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={newPatient.phone}
                      onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Añadir Paciente
                </button>
              </form>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Lista de Pacientes</h2>
              </div>
              <ul className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <PatientItem 
                    key={patient.id} 
                    patient={patient} 
                    onUpdateDiagnosis={onUpdateDiagnosis} 
                  />
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="mt-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Próximas Citas</h2>
              <p className="text-gray-500">No hay citas programadas.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PsychologistDashboard;