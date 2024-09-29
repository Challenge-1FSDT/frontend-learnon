// button component with props

import React from 'react';

export default function Button({ auto, type, children }) {
  return (
    <button
      className={`${
        auto ? 'w-auto' : 'w-full'
      } bg-indigo-950 text-white p-2 rounded-lg`}
    >
      {children}
    </button>
  );
}