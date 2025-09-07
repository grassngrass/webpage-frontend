"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect to OTP verification with email in query
    router.push(`/auth/otp?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="relative min-h-screen w-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background text */}
      <div className="absolute flex-col inset-0 flex items-center justify-center overflow-hidden -space-y-6 font-oi opacity-20">
        <div className="whitespace-nowrap text-[6rem]">
          RESET PASSWORD RESET PASSWORD
        </div>
        <div className="whitespace-nowrap text-[6rem]">
          PASSWORD RESET PASSWORD RESET
        </div>
      </div>

      {/* Globe image */}
      <Image
        className="absolute h-auto w-2/5 opacity-80"
        src="/globe.png"
        alt="globe"
        width="1024"
        height="1024"
      />

      {/* Reset form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 z-5 w-[90%] max-w-md"
      >
        <div>
          <label className="block text-xl font-rubik-mono-one mb-1">
            Reset Password
          </label>
          <p className="text-sm  text-gray-300 mb-2 font-orbitron">
            Enter your registered email
          </p>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL..."
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2 lowercase"
          />
        </div>

        <button
          type="submit"
          className="w-full border-2 border-[#FFFFFF] px-4 py-3 font-orbitron text-xl hover:bg-[#00FFC6] hover:text-black transition shadow-lg shadow-[#00FFC6]/50"
        >
          SEND RESET OTP
        </button>
      </form>
    </div>
  );
}
