// src/layout/AppLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import Login from '../Login';
import { useNavigate } from 'react-router-dom';

export default function AppLayout() {
 const navigate = useNavigate();
 
 const handleNavigate = (path) => {
    navigate(path)
 }


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-6">My App</h1>
        <nav className="flex flex-col space-y-2">
          <p onClick={()=>navigate('/register')}  className="hover:bg-gray-700 p-2 rounded">Home</p>
          <p  onClick={()=>navigate('/login')}  className="hover:bg-gray-700 p-2 rounded">About</p>
          <p onClick={()=>navigate('/setting')} className="hover:bg-gray-700 p-2 rounded">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet/>
      </main>
    </div>
  );
}
