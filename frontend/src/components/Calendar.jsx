import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Calendar.module.css";
import { Form } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
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
    // Send reservation data (selectedDate and selectedTime) to backend for processing
    console.log("Reservation Date:", selectedDate);
    console.log("Reservation Time:", selectedTime);
    // Add logic here to send reservation data to backend
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

export default Calendar;

// useEffect(() => {
//   const fetchAvailableDates = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/customer/getAll");
//       const customers = response.data;
//       setCustomers(customers || []);
//     } catch (error) {
//       console.error("Error fetching available dates: !!!!!", error);
//     }
//   };

//   fetchAvailableDates();
// }, []);
// return (
//   <div>
//     {customers.map((customer) => (
//       <h1>{JSON.stringify(customer)}</h1>
//     ))}
//   </div>
// );
