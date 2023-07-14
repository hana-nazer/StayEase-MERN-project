import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
import OwnerRoutes from "./routes/ownerRoutes";
import Error404 from "./components/error/userError/Error404";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/owner/*" element={<OwnerRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
       
      </Routes>
    </Router>
  );
}

export default App;
