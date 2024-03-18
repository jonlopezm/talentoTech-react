import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import Example from './conponents/example';
import Footer from './conponents/footer';
import Headers from './conponents/header';
import UserList from './conponents/user/UserList';
import UserForm from './conponents/user/UserForm';
import Login from './conponents/auth/Login';



function App() {  
  return (
    <>
      <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/user" element={<UserList/>} />
        <Route path="/create-user" element={<UserForm/>} />
        <Route path="/user/:id" element={<UserForm />} />
        <Route path="/login" element={<Login />} />       
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
