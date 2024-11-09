import React from 'react';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl">public homepage</h1>

        <a href="/api/auth/login">Login</a>
      </div>
    </div>
  );
}
