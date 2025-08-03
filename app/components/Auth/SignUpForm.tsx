'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('https://akil-backend.onrender.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, role: 'user' }),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    window.location.href = '/verify-email';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-6">
      <h2 className="text-3xl font-extrabold text-center">Sign Up Today!</h2>
      <input
        name="name"
        placeholder="Full Name"
        required
        className="input"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="input"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="input"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        required
        className="input"
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
      />
      <button type="submit" className="btn-submit">Continue</button>
      <p className="text-center">Or sign up with Google:</p>
      <button
        type="button"
        onClick={() => signIn('google')}
        className="btn-google"
      >
        Sign Up with Google
      </button>
    </form>
  );
}
