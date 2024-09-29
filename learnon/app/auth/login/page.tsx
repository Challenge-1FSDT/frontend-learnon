'use client';

import { useState } from 'react';
import { login } from '../../lib/auth';
import Navbar from '@/app/components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar />
    <div className="w-full max-w-md mx-auto mt-10 p-8 bg-indigo-200 rounded-lg shadow-lg">
      
      <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">LOGIN</h2>

      <div className="mb-4">
        <label className="block text-indigo-800 font-bold mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-indigo-800 font-bold mb-2" htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-800 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        LOGIN
      </button>
    </div>
    </div>
  );
}

