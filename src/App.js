import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './conponents/footer';
import Headers from './conponents/header';
import UserList from './conponents/user/UserList';
import Login from './conponents/auth/Login';
import UserFormCreate from './conponents/user/UserFormCreate';
import UserFormEdit from './conponents/user/UserFormEdit';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { loginSuccess } from "./features/authSlice";
import PrivateRoute from './conponents/PrivateRoute';
import ChangePassword from './conponents/auth/ChangePassword';
import HouseFormCreate from './conponents/house/HouseFormCreate';
import Chat from './conponents/chat/Chat';
import Home from './conponents/Home';
import HouseFormEdit from './conponents/house/HouseFormEdit';
import HouseList from './conponents/house/HouseList';



function App() {  

  const dispatch = useDispatch();

  useEffect(() => {
    const sessionData = localStorage.getItem('sessionData');
    if(sessionData) {
      dispatch(loginSuccess(JSON.parse(sessionData)))      
    }
  })

  
  return (
    <>
      <BrowserRouter>
      <Headers />
      <Routes>
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route path="/user" element={<PrivateRoute Component={UserList} />} />
          <Route path="/house" element={<PrivateRoute Component={HouseList} />} />
          <Route path="/user/:id" element={<PrivateRoute Component={UserFormEdit} />} />   
          <Route path="/house/:id" element={<PrivateRoute Component={HouseFormEdit} />} />
          <Route path="/change-password" element={<PrivateRoute Component={ChangePassword} />} /> 
          <Route path="/create-house" element={<PrivateRoute Component={HouseFormCreate} />} />
          <Route path='/chat' element={<PrivateRoute Component={Chat} />} />
          <Route path="/create-user" element={<UserFormCreate />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
