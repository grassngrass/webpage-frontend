'use client';

import { useState } from 'react';

const Department = ({ departments = [], onDepartmentClick }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    if (onDepartmentClick) onDepartmentClick(department);
  };

  return (
    <div className="w-full bg-black min-h-screen relative">
      <div className={`flex h-screen ${departments.length <= 4 ? 'divide-x divide-white/10' : 'flex-wrap'}`}>
        {departments.map((department, index) => (
          <button
            key={index}
            onClick={() => handleDepartmentClick(department)}
            className={`
              relative flex-1 min-w-0 bg-black
              hover:bg-gray-900/50 transition-all duration-300 group cursor-pointer
              ${selectedDepartment === department ? 'bg-gray-900/30' : ''}
              ${departments.length > 4 ? 'min-h-screen border-r border-white/10 last:border-r-0' : ''}
            `}
            style={{
              backgroundImage: `url('/departmentSelect.svg')`,
              backgroundSize: 'auto 1000px',
              backgroundPosition: 'center',
            }}
          >
            {/* Department Text */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="transform -rotate-90 origin-center">
                <span className="text-foreground font-rubik-mono-one font-bold text-6xl text-shadow-[2px_3px_0_var(--green)]">
                  {department.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Hover bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Department;
