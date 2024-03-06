import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../components/Button";
import { Form } from "react-router-dom";

const Contact = () => {
  const [results, setResult] = useState([]);
  async function onFormSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await fetch("http://localhost:8080/message/add", {
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

    try {
      const getResponse = await fetch("http://localhost:8080/message/getMessage");

      if (!getResponse.ok) {
        console.log(getResponse);
        throw new Error("fetch unsuccessful");
      }
      const data = await getResponse.json();
      setResult(data);
    } catch (error) {
      console.log(error);
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

      {/* <h1>
        {results.map((result) => {
          return (
            <div key={result.id}>
              <h1>{result.name}</h1>
              <p>{result.email}</p>
              <p>{result.phone_number}</p>
              <p>{result.message}</p>
              <p>{result.id}</p>
            </div>
          );
        })}
      </h1> */}
    </div>
  );
};

export default Contact;
