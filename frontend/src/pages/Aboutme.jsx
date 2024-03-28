import styles from "./Aboutme.module.css";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <h1>About me!</h1>
      </div>
      <main className={styles.content}>
        <img
          src='vietnamese.jpeg'
          alt="nhu's face"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Odio euismod lacinia at quis risus sed. Amet purus gravida quis blandit turpis cursus. Enim ut
          sem viverra aliquet eget sit amet. Tincidunt lobortis feugiat vivamus at augue eget. Adipiscing elit
          pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis parturient mo
          vitae tortor. Non odio euismod.
        </p>
        <Button>
          <NavLink to='/Appointment'>Book Here!</NavLink>
        </Button>
      </main>
    </div>
  );
};

export default Aboutme;

// function handlePost() {
//   const object = { name: "post", number: 1, reservationDateTime: "" };
//   const tryFetch = async () => {
//     try {
//       const response = await fetch("https://localhost:8080/customer/add", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(object),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   tryFetch();
// }
// useEffect(handlePost, []);
