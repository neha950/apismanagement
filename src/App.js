import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Users';
import AddUser from './AddUser'
import './App.css';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <p>Neha Pareek Users Management</p>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
