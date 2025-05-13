const AuthSelector = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Bienvenido a PsyConnect</h1>
        <p className="text-gray-600 text-center">Selecciona tu tipo de usuario</p>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelect('psychologist')}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
          >
            Soy Psicólogo
          </button>
          <button
            onClick={() => onSelect('patient')}
            className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition duration-200"
          >
            Soy Paciente
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSelector;