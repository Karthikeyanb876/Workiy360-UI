import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/pages/Login";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
