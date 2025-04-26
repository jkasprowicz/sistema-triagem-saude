// components/Navbar.tsx

import { Link } from "react-router-dom";  // Assuming you're using react-router for routing
import { FaNotesMedical } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white text-xl font-bold">
          <FaNotesMedical className="text-2xl" /> {/* icon */}
          <span>Sistema de Saúde</span> {/* short simple name */}
        </div>        
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-200">Início</Link>
          </li>
          <li>
            <Link to="/screening" className="text-white hover:text-blue-200">Triagem</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-blue-200">Prontuário</Link>
          </li>
          <li>
            <Link to="/schedule" className="text-white hover:text-blue-200">Agendamento</Link>
          </li>
          <li>
            <Link to="/reports" className="text-white hover:text-blue-200">Relatórios</Link>
          </li>
          <li>
            <Link to="/settings" className="text-white hover:text-blue-200">Configurações</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
