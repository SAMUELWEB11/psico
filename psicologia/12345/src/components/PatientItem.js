const PatientItem = ({ patient, onUpdateDiagnosis }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [diagnosis, setDiagnosis] = useState(patient.diagnosis || '');

  const handleSave = () => {
    onUpdateDiagnosis(patient.id, diagnosis);
    setIsEditing(false);
  };

  return (
    <li className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
          <p className="text-sm text-gray-500">{patient.email} · {patient.phone}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          {isEditing ? 'Cancelar' : 'Editar Diagnóstico'}
        </button>
      </div>

      {isEditing && (
        <div className="mt-4">
          <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-1">Diagnóstico</label>
          <textarea
            id="diagnosis"
            rows="3"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="mt-2 flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Guardar
            </button>
          </div>
        </div>
      )}

      {!isEditing && patient.diagnosis && (
        <div className="mt-2">
          <h4 className="text-sm font-medium text-gray-700">Diagnóstico:</h4>
          <p className="text-sm text-gray-600 mt-1">{patient.diagnosis}</p>
        </div>
      )}
    </li>
  );
};

export default PatientItem;