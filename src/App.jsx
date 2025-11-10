import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Loginpage from "./pages/Loginpage";
import Dashboardpage from "./pages/dashboardpage"; 
import Petitionpage from "./pages/petitionpage";
import PetitionCreation from "./pages/petitioncreation";
import PollsPage from "./pages/pollspage";
import PollCreation from "./pages/pollcreation";
import ReportPage from "./pages/reportpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Loginpage />} /> 

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboardpage />} />

        {/* Petitions */}
        <Route path="/petition" element={<Petitionpage />} />
        <Route path="/petition/create" element={<PetitionCreation />} />

        {/* Polls */}
        <Route path="/polls" element={<PollsPage />} />
        <Route path="/polls/create" element={<PollCreation />} />

        {/* Reports */}
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
