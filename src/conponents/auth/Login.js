import Swal from "sweetalert2";
import { useLoginMutation } from "../../features/api/apiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { loginSuccess } from "../../features/authSlice";

export default function Login() {

  const [login] = useLoginMutation();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const user = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      const response = await login(user);
      if (response.error && response.error.data.status === 'error') {
        setError(true);
      } else {
        localStorage.setItem('sessionData', JSON.stringify(response.data))
        dispatch(loginSuccess(response.data))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/user');
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

return (
  <div className="max-w-md mx-auto px-15 py-20">
    <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
    {!error ? null : (
      <div className="flex justify-center bg-red-100 text-red-700 p-4 mb-6" role="alert">
        <p className="font-bold">Datos Invalidos</p>
        <p>{error}</p>
      </div>
    )}
    <form onSubmit={handleSubmit} className="shadow-md rounded pt-6 pb-12 px-10 mb-4 ">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          className="shadow apperance-none border w-full 
                    focus:shadow-outline disabled:bg-slate-50 
                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          required
          name="password"
          placeholder="Password"
          className="shadow apperance-none border w-full 
                    focus:shadow-outline disabled:bg-slate-50 
                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        />
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="sumbit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </form>
  </div>
);
}
