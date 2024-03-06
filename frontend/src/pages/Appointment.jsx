import Calendar from "../components/Calendar";
import styles from "./Appointment.module.css";
import Button from "../components/Button";

const Appointment = () => {
  return (
    <div className={styles.calendar}>
      <Calendar />
      <Button>Book Today!</Button>
    </div>
  );
};

export default Appointment;
