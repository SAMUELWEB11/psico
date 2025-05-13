const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('appointment');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    symptoms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado. Un psicólogo se pondrá en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      symptoms: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">Portal del Paciente</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('appointment')}
            className={`py-4 px-6 font-medium ${activeTab === 'appointment' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Reservar Cita
          </button>
          <button
            onClick={() => setActiveTab('questionnaire')}
            className={`py-4 px-6 font-medium ${activeTab === 'questionnaire' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Cuestionario
          </button>
        </div>

        {activeTab === 'appointment' && (
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Solicitar Cita</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Motivo de la consulta</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ansiedad">Ansiedad</option>
                  <option value="depresion">Depresión</option>
                  <option value="estres">Estrés</option>
                  <option value="relaciones">Problemas de relaciones</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Describe brevemente tus síntomas</label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows="3"
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        )}

        {activeTab === 'questionnaire' && (
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Cuestionario de Salud Mental</h2>
            <p className="text-gray-600 mb-6">Este cuestionario nos ayudará a entender mejor tus necesidades y conectar con el psicólogo adecuado.</p>
            
            <form className="space-y-6">
              {[1, 2, 3, 4, 5].map((q) => (
                <div key={q} className="border-b border-gray-200 pb-6">
                  <h3 className="text-md font-medium text-gray-900 mb-3">Pregunta {q}</h3>
                  <p className="text-gray-700 mb-4">¿Con qué frecuencia te sientes [síntoma relacionado]?</p>
                  <div className="space-y-2">
                    {['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'].map((option, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          id={`q${q}-option${i}`}
                          name={`question${q}`}
                          value={option}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label htmlFor={`q${q}-option${i}`} className="ml-3 block text-sm font-medium text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
              >
                Enviar Cuestionario
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPortal;