"use client";
import React, { useState } from "react";


interface ButtonProps {
  isSubmitted: boolean;
  department: string;
  lastSave: string;
  onDelete?: () => void;
}

const ApplicationCard: React.FC<ButtonProps> = ({
  isSubmitted,
  department,
  lastSave,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isSubmitted) {
    // Submitted state style
    return (
      <button
        className="relative w-64 h-64 bg-black border border-gray-300 shadow-md overflow-hidden cursor-pointer"
      >


        <div className="absolute right-0 top-28 w-6 flex items-center justify-center text-gray-600 rotate-[90deg] origin-top-right text-xl font-orbitron font-bold">
          SUBMITTED
        </div>

        <div className="absolute top-2 left-6 text-sm">
          <div className="font-semibold">{department}</div>
          <div className="text-gray-500 text-xs">{lastSave}</div>
        </div>

        {/* Center graphic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/draftGraphic.svg"
            alt="Card graphic"
            className="w-50 h-50"
          />
        </div>

      </button>

    );
  }

  // Draft or Hover state
  return (
    <div
      className="relative w-64 h-64 bg-black border-3 border-white shadow-[3px_3px_0_0_#79FFD8] overflow-hidden cursor-pointer"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left vertical "DRAFT" */}
      <div className="absolute left-8 top-13 w-6 flex items-center justify-center text-gray-600 rotate-[90deg] origin-top-left text-3xl font-orbitron font-bold">
        DRAFT
      </div>

      {/* Department and Last Save */}

      <div className="absolute top-2 right-2">
        <div className="font-orbitron font-bold text-[#00BC85] text-xl">{department}</div>
        <div className="flex items-end font-orbitron mt-1">
          <div className="font-mono tracking-widest text-gray-500 text-xs">LAST SAVE:</div>
          <div className="text-white ml-1 text-base">{lastSave}</div>
        </div>
      </div>
      {/* Center graphic */}
      < div className="absolute bottom-0 right-0" >
        <img
          src="/draftGraphic.svg"
          alt="Card graphic"
          className="w-50 h-50"
        />
      </div >

      <div
        className={`absolute bottom-0 left-0 h-1/4 w-full bg-red-500 text-white font-orbitron border-t-2 border-white text-center transition-all duration-300 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
      >
        <button onClick={onDelete} className="w-full cursor-pointer text-3xl font-bold h-full">
          DELETE
        </button>
      </div>
    </div >
  );
};

export default ApplicationCard;
