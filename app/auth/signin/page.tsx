"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background repeating REGISTER text */}
      <div className="absolute flex-col inset-0 flex items-center justify-center overflow-hidden -space-y-6 font-oi #FFFFFF opacity-20 ">
        <div className=" whitespace-nowrap text-[6rem]  #FFFFFF">
          EGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
        </div>
        <div className=" whitespace-nowrap text-[6rem] #FFFFFF">
          IS REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
        </div>
        <div className=" whitespace-nowrap text-[6rem] #FFFFFF">
          ER REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
        </div>
        <div className=" whitespace-nowrap text-[6rem] #FFFFFF">
          GISTER REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
        </div>
        <div className=" whitespace-nowrap text-[6rem] #FFFFFF">
          STER REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
        </div>
        <div className=" whitespace-nowrap text-[6rem] #FFFFFF">
          ER REGISTER REGISTER REGISTER REGISTER REGISTER REGISTER
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

      {/* Signup form */}
      <form className="flex flex-col space-y-6 z-5">
        <div>
          <label className="block text-xs font-rubik-mono-one #FFFFFF mb-1">
            EMAIL
          </label>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL..."
            className="w-full px-6 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2 lowercase"
          />
        </div>

        <div>
          <label className="block text-xs font-rubik-mono-one #FFFFFF mb-1">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="ENTER YOUR PASSWORD..."
            className="w-full px-4 py-2 bg-transparent border-[#FFFFFF] font-rubik-mono-one focus:outline-none focus:border-[#FFFFFF] border-2"
          />
        </div>

        {/* Signin/Signup toggle buttons */}
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

        {/* Submit button */}
        <button
          type="submit"
          className="w-full border-2 border-[#FFFFFF] px-4 py-3 font-orbitron text-xl hover:bg-[#00FFC6] hover:text-black transition shadow-lg shadow-[#00FFC6]/50"
        >
          SUBMIT
        </button>

        
        <div className="text-end">
          <Link
            href="/auth/passwordReset"
            className="text-xs text-[#00FFC6] hover:underline font-orbitron"
          >
            FORGOT PASSWORD?
          </Link>
        </div>
      </form>
    </div>
  );
}
