// App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";  // Import the Navbar component
import { PatientForm } from "./components/PatientForm";  // Assuming you have this for patient triage
import { PatientDashboard } from "./components/PatientDashboard";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";



function App() {
  return (
    <Router>
      <Navbar />  {/* Place the Navbar here to make it accessible on all pages */}
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screening" element={<PatientForm />} />
          <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/dashboard" element={<PatientDashboard />} /> {/* <-- Add Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
