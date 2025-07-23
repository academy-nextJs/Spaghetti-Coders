import React from 'react';

export default function DashboardInput({
  label,
  initialValue,
  name,
  error
}: {
  label: string;
  initialValue: string;
  name: string;
  error?:string
}) {
  return (
    <div className="relative w-full  ">
      <label className="absolute -top-2 right-3 bg-white dark:bg-black px-1 z-10">
        {label}
      </label>
      <input
        name={name}
        type="text"
        placeholder=""
        defaultValue={initialValue}
        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-primaryPurple'
        }`}
      />
       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
