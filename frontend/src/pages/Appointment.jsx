import Calendar from "../components/Calendar";
import styles from "./Appointment.module.css";
import Button from "../components/Button";
import { useState } from "react";

const Appointment = () => {
  const [book, setBook] = useState("Book now!");
  const options = ["no", "stop", "ur molesting me", "YAMATE KUDASAI!!!!", "nah, i'd win"];

  function handleClick() {
    const random = Math.floor(Math.random() * options.length);
    console.log(random);
    setBook(options[random]);
  }

  return (
    <div className={styles.calendar}>
      <h1>Select from below</h1>
      <Calendar />
      <Button clickHandler={handleClick}>{book}</Button>
    </div>
  );
};

export default Appointment;

//logic for calendar and updating accordingly based on availability
