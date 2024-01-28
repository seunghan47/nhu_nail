import React, { useEffect, useState } from "react";
// import styles from "./Calendar.module.css";

const Calendar = () => {
  // const [availableDates, setAvailableDates] = useState([]);
  const [customers, setCustomers] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("http://localhost:8080/customer/getAll");
        const customers = response.data;
        setCustomers(customers || []);
        // console.log("response: " + response);
        // console.log("Status Code:", response.status);
        // console.log("Headers:", response.headers);
        // console.log("Data:", response.data);
      } catch (error) {
        alert("hi");
        console.error("Error fetching available dates: !!!!!", error);
      }
    };

    fetchAvailableDates();
  }, []);
  return (
    <div>
      {customers.map((customer) => (
        <h1>{JSON.stringify(customer)}</h1>
      ))}
      <h1>Hello World</h1>
    </div>
  );
};

export default Calendar;
