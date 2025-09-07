"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNum, setRegNum] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    router.push(`/auth/otp?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="relative min-h-screen w-screen text-white flex items-center justify-center overflow-hidden">
      <div className="absolute flex-col inset-0 flex items-center justify-center overflow-hidden -space-y-6 font-oi opacity-20">
        <div className="whitespace-nowrap text-[6rem]">REGISTER REGISTER REGISTER REGISTER</div>
        <div className="whitespace-nowrap text-[6rem]">SIGNUP REGISTER REGISTER REGISTER</div>
        <div className="whitespace-nowrap text-[6rem]">REGISTER REGISTER REGISTER REGISTER</div>
        <div className="whitespace-nowrap text-[6rem]">SIGNUP REGISTER REGISTER REGISTER</div>
      </div>

      <Image
        className="absolute h-auto w-2/5 opacity-80"
        src="/globe.png"
        alt="globe"
        width="1024"
        height="1024"
      />

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 z-5 w-[90%] max-w-md">
        <div>
          <label className="block text-xs font-rubik-mono-one mb-1">NAME</label>
          <input
            type="text"
            placeholder="ENTER YOUR NAME..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2"
          />
        </div>

        <div>
          <label className="block text-xs font-rubik-mono-one mb-1">EMAIL</label>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2"
          />
        </div>

        <div>
          <label className="block text-xs font-rubik-mono-one mb-1">REG NUM</label>
          <input
            type="text"
            placeholder="ENTER YOUR REG NUM..."
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
            required
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2"
          />
        </div>

        <div>
          <label className="block text-xs font-rubik-mono-one mb-1">PASSWORD</label>
          <input
            type="password"
            placeholder="ENTER YOUR PASSWORD..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2"
          />
        </div>

        <div className="flex space-x-6">
          <Link
            href="/auth/signin"
            className="flex-1 border border-white px-4 py-2 text-center font-orbitron hover:bg-white hover:text-black transition shadow-lg shadow-white/20"
          >
            SIGNIN
          </Link>
          <Link
            href="/auth/signup"
            className="flex-1 border border-white px-4 py-2 text-center font-orbitron hover:bg-white hover:text-black transition shadow-lg shadow-white/20"
          >
            SIGNUP
          </Link>
        </div>

        <button
          type="submit"
          className="w-full border-2 border-[#FFFFFF] px-4 py-3 font-orbitron text-xl hover:bg-[#00FFC6] hover:text-black transition shadow-lg shadow-[#00FFC6]/50"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
