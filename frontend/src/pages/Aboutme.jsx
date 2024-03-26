import styles from "./Aboutme.module.css";
import Button from "../components/Button";

const Aboutme = () => {
  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <h1>About me!</h1>
      </div>
      <main className={styles.content}>
        <img
          className={styles.vietnamese}
          src='vietnamese.jpeg'
          alt="nhu's face"
        />
      </main>
      <Button>Book an appointment</Button>
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
