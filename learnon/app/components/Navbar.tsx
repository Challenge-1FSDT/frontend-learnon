// navbar

import React from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
  
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