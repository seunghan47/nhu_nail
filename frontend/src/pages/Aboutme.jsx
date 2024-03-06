import styles from "./Aboutme.module.css";
import Button from "../components/Button";

const Aboutme = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.flex_container}>
        <p className={styles.flex_item}>
          Hi! I'm <span className={styles.span}>Nhu!</span> Your friendly nail enthusiast with over a decade of
          experience in crafting exquisite nail designs. My passion for creating beautiful and personalized nail art has
          only grown stronger over the years. Embark on a journey with me as I share my expertise and commitment to
          delivering not just flawless nails but an unforgettable experience. From classic manicures to adventurous nail
          art, each session is a personalized touch reflecting your unique style. Let's create more than just stunning
          nails together; let's create a connection. Step into My Nail Haven, where warmth and skill blend seamlessly to
          transform your nails into a canvas of beauty. I'm excited to be your go-to for all things nails, and I can't
          wait to welcome you into my world of creativity and pampering. Get ready to indulge in a nail care experience
          like no other! 🌟✨
        </p>
        <img
          className={styles.vietnamese}
          src='vietnamese.jpeg'
          alt="nhu's face"
        />
      </div>
      <Button>Book now!</Button>
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
