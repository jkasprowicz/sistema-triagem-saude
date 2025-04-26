import { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

export function Home() {
  // Fake patient data for now
  const patients = [
    { id: 1, name: "João Silva", priority: "Emergência", status: "Em atendimento" },
    { id: 2, name: "Maria Souza", priority: "Alta", status: "Aguardando" },
    { id: 3, name: "Carlos Pereira", priority: "Média", status: "Aguardando" },
  ];

  // Sample appointments data
  const appointments = [
    { date: new Date(2025, 3, 25), patientName: "João Silva", status: "Em atendimento" },
    { date: new Date(2025, 3, 26), patientName: "Maria Souza", status: "Aguardando" },
  ];

  // State for the selected date
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Welcome */}
      <h1 className="text-2xl font-bold">Bem-vindo ao Sistema de Triagem!</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Pacientes Hoje</h2>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Emergências</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Tempo Médio de Espera</h2>
          <p className="text-2xl font-bold">15 min</p>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="flex gap-4 mt-6">
        <Link to="/screening" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Nova Triagem
        </Link>
        <Link to="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Prontuário
        </Link>
      </div>

      {/* Calendar with appointments */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Calendário de Agendamentos</h2>
        <div className="flex space-x-6">
          <div className="w-1/2">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileClassName={({ date, view }) => {
                // Highlight dates with appointments
                const hasAppointments = appointments.some(
                  (appt) => appt.date.toDateString() === date.toDateString()
                );
                return hasAppointments ? "bg-blue-500 text-white" : "";
              }}
              tileContent={({ date, view }) => {
                const appointmentsForTheDay = appointments.filter(
                  (appt) => appt.date.toDateString() === date.toDateString()
                );
                return appointmentsForTheDay.length > 0 ? (
                  <ul className="text-xs text-white">
                    {appointmentsForTheDay.map((appt, index) => (
                      <li key={index}>{appt.patientName}</li>
                    ))}
                  </ul>
                ) : null;
              }}
            />
          </div>

          {/* Patient List */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">Pacientes em Atendimento</h3>
            <table className="w-full table-auto border-collapse mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Nome</th>
                  <th className="border px-4 py-2">Prioridade</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="border px-4 py-2">{patient.name}</td>
                    <td className="border px-4 py-2">{patient.priority}</td>
                    <td className="border px-4 py-2">{patient.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
