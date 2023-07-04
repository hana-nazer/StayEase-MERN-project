import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
import OwnerRoutes from "./routes/ownerRoutes";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
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
