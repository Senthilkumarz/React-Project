import AppLayout from "./component/login/layout/AppLayout";
import Login from "./component/login/Login";
import Register from "./component/login/signup/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from "./component/Setting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Register />} /> {/* renders at "/" */}
          <Route path="login" element={<Login />} /> {/* renders at "/login" */}
          <Route path="register" element={<Register />} /> {/* renders at "/register" */}
          <Route path="setting" element={<Setting />} /> {/* renders at "/register" */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
