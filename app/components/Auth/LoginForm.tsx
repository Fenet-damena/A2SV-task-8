'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {
      redirect: true,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-6">
      <h2 className="text-3xl font-extrabold text-center">Welcome Back,</h2>
      
      <input
        name="email"
        placeholder="Email address"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="input"
      />
      
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
        className="input"
      />

      <button type="submit" className="btn-submit">
        Login
      </button>

      <p className="text-center">Or login with Google:</p>

      <button
        type="button"
        onClick={() => signIn('google')}
        className="btn-google"
      >
        Sign in with Google
      </button>
    </form>
  );
}
