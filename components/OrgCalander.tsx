// //npm install react-calendar
// "use client";
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; 

// const OrgCalander: React.FC = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (newDate: Date) => {
//     setDate(newDate);
//   };

//   return (
//     <div className="bg-white p-4 rounded-md shadow-lg">
//       <Calendar
//         onChange={onChange}
//         value={date}
//       />
//     </div>
//   );
// };

// export default OrgCalander;

// Installation command for the required package
// npm install react-calendar

"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styling for the calendar

/**
 * OrgCalendar component that integrates 'react-calendar' to display and manage dates.
 * 
 * This component uses a state, `date`, to keep track of the selected date within the calendar.
 * It provides a user interface for date selection which can be further integrated with backend
 * services for scheduling, event management, or any date-specific functionalities.
 * 
 * @returns A calendar component that allows users to select a date.
 */
const OrgCalendar: React.FC = () => {
  // State to store the currently selected date
  const [date, setDate] = useState(new Date());

  /**
   * Handler function for date change events within the calendar.
   * Updates the `date` state with the new date selected by the user.
   * 
   * @param newDate - The new date selected in the calendar.
   */
  const onChange = (newDate: Date) => {
    setDate(newDate);
    // Future integration point: This function can be expanded to include calls to a backend
    // to fetch or update data based on the selected date, such as fetching events for the day.
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <Calendar
        onChange={onChange} // Assign the onChange handler to update the component's state
        value={date} // Bind the calendar's value to the component's state
      />
    </div>
  );
};

export default OrgCalendar;
