"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") || "your email";

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div className="relative min-h-screen w-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background repeating OTP text */}
      <div className="absolute flex-col inset-0 flex items-center justify-center overflow-hidden -space-y-6 font-oi opacity-20">
        <div className="whitespace-nowrap text-[6rem]">OTP OTP OTP OTP OTP</div>
        <div className="whitespace-nowrap text-[6rem]">
          ENTER OTP ENTER OTP ENTER OTP
        </div>
        <div className="whitespace-nowrap text-[6rem]">
          VERIFY OTP VERIFY OTP VERIFY OTP
        </div>
      </div>

      {/* Globe Image */}
      <Image
        className="absolute h-auto w-2/5 opacity-80"
        src="/globe.png"
        alt="globe"
        width="1024"
        height="1024"
      />

      {/* OTP Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 z-5 w-[90%] max-w-md"
      >
        <label className="block  text-xl font-rubik-mono-one mb-1">
          ENTER 6-DIGIT OTP
        </label>

        <p className="text-sm  text-gray-300 mb-2 font-orbitron">
          We sent the OTP to <span className="text-[#00FFC6]">{email}</span>
        </p>

        <div className="flex space-x-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl bg-transparent border-2 border-white font-orbitron focus:outline-none focus:border-[#00FFC6]"
            />
          ))}
        </div>

        <div className="flex space-x-6">
          <button
            type="button"
            onClick={() => router.push("/auth/signup")}
            className="flex-1 border-2 border-[#FFFFFF] px-4 py-3 font-orbitron text-xl hover:bg-[#00FFC6] hover:text-black transition shadow-lg shadow-[#00FFC6]/50"
          >
            BACK
          </button>
          <button
            type="submit"
            className="flex-1 border-2 border-[#FFFFFF] px-4 py-3 font-orbitron text-xl hover:bg-[#00FFC6] hover:text-black transition shadow-lg shadow-[#00FFC6]/50"
          >
            VERIFY
          </button>
        </div>
      </form>
    </div>
  );
}
