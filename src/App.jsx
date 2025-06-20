import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/pages/Login";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Navigate to="/login" replace />} />
    {/* Optionally, add a catch-all route for 404 */}
    {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
  </Routes>
);

export default App;
