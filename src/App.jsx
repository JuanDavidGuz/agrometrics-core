import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{ background: "#F5F0E8", fontFamily: "'Georgia', serif" }}
      >
        <Header />
        <Routes>
          <Route path="/:tabId" element={<DashboardContent />} />
          <Route
            path="/"
            element={<Navigate to="/precios-diarios" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
