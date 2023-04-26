import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from './routes/adminRoutes';
import OwnerRoutes from './routes/ownerRoutes'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/*" element={<UserRoutes/>}/>
     </Routes>
     <Routes>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
     </Routes>
     <Routes>
      <Route path="/owner/*" element={<OwnerRoutes/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
