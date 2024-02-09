"use client";
import React, { useState } from 'react';
import OrgCalander from './OrgCalander';

const locations = ["Unidad Contry", "Unidad Apodaca", "Unidad Santa Catarina"];
const timeSlots = [
  "8 am - 9 am", "11 am - 12 pm", "2 pm - 3 pm", "5 pm - 6 pm",
  "9 am - 10 am", "12 pm - 1 pm", "3 pm - 4 pm", "6 pm - 7 pm",
  "10 am - 11 am", "1 pm - 2 pm", "4 pm - 5 pm", "7 pm - 8 pm"
];

const OrgCitas: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="flex justify-around p-4 mt-10">
      <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
        {/* Locations Section */}
        <h2 className="font-bold text-xl mb-4">Ubicaciones</h2>
        <div className="flex flex-col">
          {locations.map((location, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedLocation(location)}
              className={`p-2 my-2 bg-white rounded-md shadow ${selectedLocation === location ? 'bg-blue-300' : ''}`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Time Slots Section */}
        <h2 className="font-bold text-xl mb-4 mt-8">Horarios</h2>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((time, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedTime(time)}
              className={`p-2 bg-white rounded-md shadow ${selectedTime === time ? 'bg-blue-300' : ''}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
        <h2 className="font-bold text-xl mb-4">Calendario</h2>
        <OrgCalander />
      </div>
    </div>
  );
};

export default OrgCitas;
