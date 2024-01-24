import React from "react";
import Calendar from "react-calendar";
import styles from "./Appointment.module.css";
import Button from "../components/Button";

const Appointment = () => {
  return (
    <div className={styles.calendar}>
      <h1>Select from below</h1>
      <Calendar />
      <Button>Book now!</Button>
    </div>
  );
};

export default Appointment;

//logic for calendar and updating accordingly based on availability
