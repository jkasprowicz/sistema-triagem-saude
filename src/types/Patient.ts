// types/Patient.ts

export interface PatientData {
  name: string;
  age: number;
  gender: "Masculino" | "Feminino" | "Outro";
  birthDate: string; // Date in string format (YYYY-MM-DD)
  symptoms: string;
  priority: "Baixa" | "Média" | "Alta" | "Emergência";
  emergencyContact: string; // Emergency contact information (name or phone number)
}
