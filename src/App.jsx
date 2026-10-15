import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Organizer from "./pages/organizer";
import Plans from "./pages/plans";
import Sponsor from "./pages/sponsor";
import Student from "./pages/student";
import SponsorHackathon from "./pages/sponsor-hackathon";
import SponsorList from "./pages/sponsorList.jsx";
import StudentDashboard from "./components/StudentDashboard";
import StudentRegister from "./components/StudentRegister";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <div className="nav-brand">HackConnect</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/organizer">Organizer</Link>
          <Link to="/sponsor">Sponsor</Link>
          <Link to="/student">Student</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizer" element={<Organizer />} />
         <Route path="/student" element={<StudentDashboard />} />

        <Route path="/student/register/:hackathonName" element={<Student view="register" />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/sponsorList" element={<SponsorList/>}/>
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/student" element={<Student />} />

        <Route
          path="/sponsor-hackathon"
          element={<SponsorHackathon />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;