import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Businesses from "./pages/Businesses";
import Tools from "./pages/Tools";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/tools" element={<Tools />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
