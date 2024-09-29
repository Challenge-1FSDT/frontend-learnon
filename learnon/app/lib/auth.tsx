// lib to connect to the api and auth

import { User } from '../types/User';

export let user: User | null = null;

export async function login(email: string, password: string): Promise<void> {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    user = await response.json();
  } else {
    throw new Error('Login failed');
  }
}