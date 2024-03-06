import { useEffect } from "react";
import styles from "./Services.module.css";
import Service from "../components/Service";
import Button from "../components/Button";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.services}>
        <h1>Available Services! </h1>
      </div>
      <div className={styles.service_container}>
        {services.map((service) => (
          <Service
            id={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
        <Button>Book Today!</Button>
      </div>
    </>
  );
};

export default Services;

const services = [
  {
    id: 1,
    title: "Manicure",
    image: "manicure.jpeg",
    description: (
      <>
        Manicure service including but not limited to
        <br></br>
        cutting, filing, and shaping nails
      </>
    ),
  },
  {
    id: 2,
    title: "Pedicure",
    image: "pedicure.jpeg",
    description: (
      <>
        Pedicure service with toenail cutting, cuticle removal
        <br></br>
        shaping, buffing, and much more
      </>
    ),
  },
  {
    id: 3,
    title: "Nail Art",
    image: "art.webp",
    description: (
      <>
        Will decorate and enchance your nail style.
        <br />
        Bring a picture of what you want or ask for a recommendation
      </>
    ),
  },
  {
    id: 4,
    title: "Nail Extension",
    image: "extension.jpeg",
    description: (
      <>
        Get the nail extension of your choice
        <br />
        with either the gel or the acrylics
      </>
    ),
  },
];
