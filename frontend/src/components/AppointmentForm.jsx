import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./AppointmentForm.module.css";
import { Form } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  function handleService(event) {
    setSelectedService(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.calendar}>
      <h1>
        <span className={styles.title}>Request a New Appointment</span>
      </h1>
      <Form
        onSubmit={handleSubmit}
        className={styles.date_box}
      >
        <div className={styles.date_box_item}>
          <label>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat='MM/dd/yyyy'
            minDate={new Date()}
            placeholderText='Select a date'
            className={styles.select_box}
          />
        </div>
        <div className={styles.date_box_item}>
          <label>Time</label>
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            className={styles.select_box}
          >
            <option value=''>Select a time</option>
            <option value='10:00 AM'>10:00 AM</option>
            <option value='12:00 PM'>12:00 PM</option>
            <option value='02:00 PM'>02:00 PM</option>
            <option value='04:00 PM'>04:00 PM</option>
            <option value='06:00 PM'>06:00 PM</option>
          </select>
        </div>
        <div className={styles.date_box_item}>
          <label>Service</label>
          <select
            onChange={handleService}
            value={selectedService}
            className={styles.select_box}
          >
            <option value=''>Select a service</option>
            <option value='Manicure'>Manicure</option>
            <option value='Pedicure'>Pedicure</option>
            <option value='Nail Art'>Nail Art</option>
            <option value='Nail Art'>Eye Lashes</option>
          </select>
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
