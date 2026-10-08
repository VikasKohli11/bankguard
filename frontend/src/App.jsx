import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Alerts from "./pages/Alerts";
import Cases from "./pages/Cases";
import Dashboard from "./pages/Dashboard";
import FraudRules from "./pages/FraudRules";
import Login from "./pages/Login";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";
import "./App.css";

function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/rules" element={<FraudRules />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
