'use client';
import { useState } from 'react';

export default function VerifyEmailForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('https://akil-backend.onrender.com/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, OTP: otp }),
    });
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    alert('Verified! Please login.');
    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-6 text-center">
      <h2 className="text-3xl font-extrabold">Verify Email</h2>
      <input
        type="email"
        placeholder="Your email"
        required
        className="input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="OTP code"
        required
        className="input"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit" className="btn-submit">Continue</button>
    </form>
  );
}
