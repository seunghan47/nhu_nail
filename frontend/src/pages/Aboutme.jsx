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
        <div className={styles.aboutText}>
          <h1>Meet Nhu, Your Total Beauty Specialist! </h1>
          <p>
            Hi there! I'm Nhu, and I'm passionate about helping you look and feel your most beautiful. As a skilled
            beauty professional with a love for all things nails, makeup, and pampering, I offer a wide range of
            services to enhance your natural beauty from head to toe.
          </p>
          <h1>More Than Just Nails: </h1>
          <p>
            While I take pride in creating stunning nail designs and providing relaxing pedicures, my expertise extends
            beyond fingertips. I can also help you achieve flawless makeup looks for any occasion, whether it's a
            dramatic smoky eye for a night out or a soft, natural glow for everyday wear.
          </p>
          <h1> What Sets Me Apart: Versatility</h1>
          <p>
            I'm skilled in a variety of techniques, allowing me to cater to your unique style and preferences. Attention
            to Detail: I believe in meticulous work and ensuring every aspect of your look is flawless. Passion &
            Creativity: I'm constantly learning and experimenting with new trends to offer you the latest and greatest
            beauty services. Relaxing Experience: My goal is to create a calming and enjoyable experience for you during
            your appointment.
          </p>
          <h1>Ready to Pamper Yourself? </h1>
          <p>
            Whether you're looking for a complete makeover or a relaxing spa treatment, I'm here to help you achieve
            your beauty goals. Let's discuss your needs and create a personalized plan to make you feel confident and
            radiant!
          </p>
        </div>
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
