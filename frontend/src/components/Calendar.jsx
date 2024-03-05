import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("http://localhost:8080/customer/getAll");
        const customers = response.data;
        setCustomers(customers || []);
      } catch (error) {
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
    </div>
  );
};

export default Calendar;
