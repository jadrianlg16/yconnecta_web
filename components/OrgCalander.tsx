//npm install react-calendar
"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const OrgCalander: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default OrgCalander;
