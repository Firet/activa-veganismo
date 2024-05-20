import React from 'react';
import Header from '../components/header/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <h1 className="page-title">
        App voluntariado vegano
      </h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
    </main>
  )
}
