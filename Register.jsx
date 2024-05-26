// pages/register.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee',
  });

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', values)
      .then(res => {
        if (res.data.status === "Success") {
          alert('Registration successful');
          router.push('/Login');
        } else {
          alert(res.data.Error || "Error occurred during registration");
        }
      })
      .catch(err => console.log(err));
  };

  return (
  
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                onChange={e => setValues({ ...values, name: e.target.value })}
                required
              />
            </div>
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                name="role"
                id="role"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                onChange={e => setValues({ ...values, role: e.target.value })}
                value={values.role}
              >
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Sign Up</button>
            <p className="mt-4 text-center">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </form>
        </div>
      
  );
}

export default Register;
