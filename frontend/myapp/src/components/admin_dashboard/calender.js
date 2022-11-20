import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { Calendar, utils } from "react-modern-calendar-datepicker";


const Calender1 = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Select Completion Date."
      value={selectedDay}
      style={{
        textAlign: 'center',
        // padding: '1rem 1.5rem',
        fontSize: '0.8rem',
        border: '1px solid #FFFFFF',
        borderRadius: '100px',
        // boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
        // color: '#2d5585',
        fill: '[#2d5585]',
        // outline: 'none',
      }}
      className="my-custom-input-class" 
    />
  )

  return (
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      renderInput={renderCustomInput} // render a custom input
      minimumDate={utils().getToday()}
      shouldHighlightWeekends
    />
  );
};

export default Calender1;