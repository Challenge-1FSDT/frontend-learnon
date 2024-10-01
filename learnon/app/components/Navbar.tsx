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
      <nav className='w-full h-[90px] bg-[#5340C6] rounded-b-2xl pb-2'>
      <div className="flex justify-between items-center bg-indigo-950 h-full  rounded-b-2xl">
        <div className="text-2xl p-4">
          <Link href="/">
            <h1 className="text-white">LEARN<b className="text-indigo-600">ON</b></h1>
          </Link>
        </div>
        <div className='flex'>
          <div className="flex p-4">
            <Link href="/">
                <Button auto type="secondary">
                  <span className='hover:text-[#5340C6]'>Home</span>
                </Button>
            </Link>
          </div>
          <div className="flex p-4">
            <Link href="/posts/create">
                <Button auto type="secondary">
                  <span className='hover:text-[#5340C6]'>Novo post</span>
                </Button>
            </Link>
          </div>
          <div className="p-4 mr-2">
          {/* logout */}
            <Button auto type="secondary" onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}>
              <span className='hover:text-[#5340C6]'>Sair</span>
            </Button>
          </div>

        </div>
      </div>
      </nav>
    );
  } else {
    return (
      <nav className='w-full h-[90px] bg-[#5340C6] rounded-b-2xl pb-2'>
        
      <div className="flex h-full justify-between items-center bg-indigo-950 rounded-b-2xl">
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
      </div>
      </nav>
    );
  }
}