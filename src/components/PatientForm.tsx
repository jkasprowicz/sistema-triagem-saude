import { useState } from "react";
import { PatientData } from "../types/Patient";

const defaultPatient: PatientData = {
  name: "",
  age: 0,
  gender: "Masculino",
  birthDate: "",
  symptoms: "",
  priority: "Baixa",
  emergencyContact: "",
};

export function PatientForm() {
  const [patient, setPatient] = useState<PatientData>(defaultPatient);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: name === "age" ? Number(value) : value }));
  }

  function validateForm() {
    const errors: { [key: string]: string } = {};
    if (!patient.name.trim()) errors.name = "Nome é obrigatório.";
    if (!patient.age || patient.age <= 0) errors.age = "Idade deve ser maior que 0.";
    if (!patient.birthDate.trim()) errors.birthDate = "Data de nascimento é obrigatória.";
    if (!patient.symptoms.trim()) errors.symptoms = "Sintomas são obrigatórios.";
    return errors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const fhirPatientData = {
        resourceType: "Patient",
        id: "example-patient-id",  // In production, generate this dynamically
        name: [
          {
            use: "official",
            family: patient.name.split(" ")[1],  // Assuming name has a space, e.g. "John Doe"
            given: [patient.name.split(" ")[0]],  // First name
          },
        ],
        gender: patient.gender.toLowerCase(),
        birthDate: patient.birthDate,  // Format as YYYY-MM-DD
        address: [
          {
            line: ["Address not provided"],  // Add logic to collect address
            city: "Anytown",
            state: "NY",
            postalCode: "12345",
            country: "USA",
          },
        ],
        contact: [
          {
            relationship: [
              {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0131",
                    code: "EMER",
                    display: "Emergency Contact",
                  },
                ],
              },
            ],
            name: {
              family: "Smith",  // Assuming emergency contact details are static for this demo
              given: ["Jane"],
            },
            telecom: [
              {
                system: "phone",
                value: "(555) 555-5555",
              },
            ],
          },
        ],
      };

      console.log("FHIR Patient Data:", fhirPatientData);
      // Submit to FHIR server here
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center">Triagem de Paciente</h2>

      {/* Patient Name */}
      <div>
        <input
          type="text"
          name="name"
          value={patient.name}
          onChange={handleChange}
          placeholder="Nome do paciente"
          className="w-full border p-2 rounded"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Patient Age */}
      <div>
        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          placeholder="Idade"
          className="w-full border p-2 rounded"
          required
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      {/* Patient Gender */}
      <div>
        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Outro</option>
        </select>
      </div>

      {/* Birth Date */}
      <div>
        <input
          type="date"
          name="birthDate"
          value={patient.birthDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
      </div>

      {/* Symptoms */}
      <div>
        <textarea
          name="symptoms"
          value={patient.symptoms}
          onChange={handleChange}
          placeholder="Sintomas principais"
          className="w-full border p-2 rounded"
          required
        />
        {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms}</p>}
      </div>

      {/* Priority */}
      <div>
        <select
          name="priority"
          value={patient.priority}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
          <option>Emergência</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Enviar
        </button>
      </div>
    </form>
  );
}
