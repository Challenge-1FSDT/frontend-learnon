'use client';

import Link from 'next/link';
import Button from './Button';
import { useEffect, useState } from 'react';

export default function Navbar() {  
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token ? token : "");
  }, []);

  if (token) {
    return (
      <nav className="flex justify-between items-center bg-indigo-950 rounded-b-2xl">
        <div className="text-2xl p-4">
          <Link href="/">
              <h1 className="text-white">LEARN<b className="text-indigo-600">ON</b></h1>
          </Link>
        </div>
        <div className="flex">
          <div className="p-4">
          <Link href="/posts/create">
              <Button auto type="secondary">
                Criar novo post
              </Button>
          </Link>
        </div>
      </div>
      {/* logout */}
      <div className="p-4">
        <Button auto type="secondary" onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}>
          Logout
        </Button>
      </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-between items-center bg-indigo-950 rounded-b-2xl">
        <div className="text-2xl p-4">
          <Link href="/">
              <h1 className="text-white">LEARN<b className="text-indigo-600">ON</b></h1>
          </Link>
        </div>
        <div className="p-4">
          <Link href="/auth/login"> 
            <Button auto type="secondary">
              Login
            </Button>
          </Link>
        </div>
      </nav>
    );
  }
}