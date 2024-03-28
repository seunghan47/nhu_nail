import styles from "./Contact.module.css";
import Button from "../components/Button";
import { Form } from "react-router-dom";
// import { Link } from "react-scroll";

const URL = "http://34.229.57.18:8080/message/add";

const Contact = () => {
  // const [results, setResult] = useState([]);
  async function onFormSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("error sending form");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }

  return (
    <div className={styles.contact}>
      <Form
        onSubmit={onFormSubmit}
        className={styles.form}
      >
        <h3>
          <span className={styles.title}>Have Questions ?</span>
        </h3>

        <div>
          <label htmlFor='name'>Name</label>
          <input
            placeholder='Jane Doe'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='Janedoe@gmail.com'
            id='email'
            type='email'
            name='email'
            required
          />
        </div>

        <div>
          <label htmlFor='number'>Phone Number</label>
          <input
            placeholder='111-111-1111'
            id='number'
            type='tel'
            name='phone_number'
            required
          />
        </div>

        <div>
          <label htmlFor='subject'>Subject</label>
          <input
            placeholder='Pricing / Specific style'
            id='subject'
            type='text'
            name='subject'
            required
          />
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            className={styles.message}
            placeholder='Is [name of style] something you can do? '
            id='message'
            type='text'
            name='message'
            required
          />
        </div>
        <Button>Send Message!</Button>
      </Form>

      <img
        src='questions.png'
        alt='questions'
        className={styles.image}
      ></img>
    </div>
  );
};

export default Contact;
