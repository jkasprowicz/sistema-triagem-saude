import { PatientData } from "../types/Patient";

export const mockPatients: PatientData[] = [
  {
    name: "João Silva",
    age: 32,
    gender: "Masculino",
    birthDate: "1992-04-15",
    symptoms: "Dor de cabeça e febre",
    priority: "Média",
    emergencyContact: "Maria Silva",
  },
  {
    name: "Ana Souza",
    age: 45,
    gender: "Feminino",
    birthDate: "1979-08-23",
    symptoms: "Fadiga e tosse",
    priority: "Alta",
    emergencyContact: "Carlos Souza",
  },
  {
    name: "Pedro Santos",
    age: 28,
    gender: "Masculino",
    birthDate: "1996-02-10",
    symptoms: "Dor abdominal",
    priority: "Baixa",
    emergencyContact: "Laura Santos",
  },
];
