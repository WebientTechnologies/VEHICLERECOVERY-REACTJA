import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/SignUp";
import AdminLayout from "./components/layouts/Dashboard";
import AddAgentForm from "./pages/admin/repo-agent/AddAgentForm";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import AddStaffForm from "./pages/admin/office-staff/AddOfficeStaff";

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<AdminLayout ><AdminDashboard/></AdminLayout>} />
        <Route path="/add-repo-agent" element={<AdminLayout > <AddAgentForm /></AdminLayout>} />
        <Route path="/add-office-staff-agent" element={<AdminLayout > <AddStaffForm /></AdminLayout>} />
        {/* <Route path="/add-repo-agent" element={<AddAgentForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
