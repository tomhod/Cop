import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/router
import axios from 'axios';
import Link from 'next/link'; // Import Link from next/link

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
});

const navigatess = useRouter();

axios.defaults.withCredentials = true;


const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/Login', values)
        .then(res => {
            if (res.data.status === "Success") {
                navigatess.push('/Dashboard');
            } else {
                alert(res.data.Error);
            }
        })
        .catch(err => console.log(err));
};

  return (
    <div className="min-h-screen flex items-center justify-center text-red-800 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            onChange={e => setValues({ ...values, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            onChange={e => setValues({ ...values, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Login</button>
        <p className="mt-4 text-center">
          Don't have an account? <Link href="/registration">Create an Account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
