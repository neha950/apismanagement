import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Users';
import AddUser from './AddUser'
import './App.css';


function App() {
  return (
    <div className="App">
      <p>Neha pareek users management</p>
      <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
