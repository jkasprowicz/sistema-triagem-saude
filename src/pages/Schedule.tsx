import { useState } from "react";

interface Appointment {
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
}

export function Schedule() {
  const [appointment, setAppointment] = useState<Appointment>({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
  });
  const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAppointmentsList((prev) => [...prev, appointment]);
    setAppointment({ patientName: "", doctorName: "", date: "", time: "" });
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Agendamento</h2>

      {/* Formulário de Agendamento */}
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg shadow-md">
        <input
          type="text"
          name="patientName"
          value={appointment.patientName}
          onChange={handleChange}
          placeholder="Nome do paciente"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="doctorName"
          value={appointment.doctorName}
          onChange={handleChange}
          placeholder="Nome do médico"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Agendar
        </button>
      </form>

      {/* Lista de Agendamentos */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Agendamentos:</h3>
        {appointmentsList.length === 0 ? (
          <p>Nenhum agendamento ainda.</p>
        ) : (
          <ul className="space-y-2">
            {appointmentsList.map((appt, index) => (
              <li key={index} className="border p-3 rounded shadow-sm">
                <p><strong>Paciente:</strong> {appt.patientName}</p>
                <p><strong>Médico:</strong> {appt.doctorName}</p>
                <p><strong>Data:</strong> {appt.date}</p>
                <p><strong>Hora:</strong> {appt.time}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
