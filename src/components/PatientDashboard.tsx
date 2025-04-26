import { useState } from "react";
import { mockPatients } from "../data/patients";
import { PatientData } from "../types/Patient";

export function PatientDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(null);

  function handleViewDetails(patient: PatientData) {
    setSelectedPatient(patient);
  }

  function handleCloseDetails() {
    setSelectedPatient(null);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Painel de Prontuário (PEP)</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Idade</th>
            <th className="border p-2">Gênero</th>
            <th className="border p-2">Prioridade</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {mockPatients.map((patient, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{patient.name}</td>
              <td className="border p-2">{patient.age}</td>
              <td className="border p-2">{patient.gender}</td>
              <td className="border p-2">{patient.priority}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleViewDetails(patient)}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for patient details */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={handleCloseDetails} className="absolute top-2 right-2 text-gray-500 hover:text-black">
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Detalhes do Paciente</h2>
            <p><strong>Nome:</strong> {selectedPatient.name}</p>
            <p><strong>Idade:</strong> {selectedPatient.age}</p>
            <p><strong>Gênero:</strong> {selectedPatient.gender}</p>
            <p><strong>Data de Nascimento:</strong> {selectedPatient.birthDate}</p>
            <p><strong>Sintomas:</strong> {selectedPatient.symptoms}</p>
            <p><strong>Prioridade:</strong> {selectedPatient.priority}</p>
            <p><strong>Contato de Emergência:</strong> {selectedPatient.emergencyContact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
