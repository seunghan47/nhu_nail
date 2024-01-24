import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className={styles.calendar}>
      <h2>My Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
        defaultActiveStartDate
      />
    </div>
  );
};

export default Calendar;
