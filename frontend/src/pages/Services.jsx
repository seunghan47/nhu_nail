import { useEffect } from "react";
import styles from "./Services.module.css";
// import Service from "../components/Service";
import Button from "../components/Button";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className={styles.services}>
        <h1>Available Services! </h1>
        {/* <p>Enjoy our special 1 on 1 service at your convenience</p> */}
      </header>
      <main className={styles.service_container}>
        <section className={styles.section_container}>
          <img
            className={styles.section_container_item}
            src='manicure.jpeg'
            alt=''
          />
          <div className={styles.section_container_item}>
            <h1>Manicure</h1>
            <span className={styles.description}>
              <p>
                A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail
                salon. Some services offered in a manicure include nail shaping, cuticle care, hand massage, and nail
                polish application.
              </p>
            </span>
            <span className={styles.pricing}>
              <p>
                <strong>Services:</strong>
                <br />
                - Basic manicure: $20
                <br />
                - Gel manicure: $30
                <br />- French manicure: $25
              </p>
            </span>
          </div>
        </section>
        <section className={styles.section_container}>
          <img
            className={styles.section_container_item}
            src='pedicure.jpeg'
            alt=''
          />
          <div className={styles.section_container_item}>
            <h1>Pedicure</h1>
            <span className={styles.description}>
              <p>
                A pedicure is a cosmetic beauty treatment for the toenails and feet performed at home or in a nail
                salon. Some services offered in a pedicure include toenail trimming, foot soaking, callus removal, foot
                massage, and nail polish application.
              </p>
            </span>
            <span className={styles.pricing}>
              <p>
                <strong>Services:</strong>
                <br />
                - Basic pedicure: $25
                <br />
                - Deluxe pedicure: $40
                <br />- Spa pedicure: $50
              </p>
            </span>
          </div>
        </section>
        <section className={styles.section_container}>
          <img
            className={styles.section_container_item}
            src='lashservice.png'
            alt=''
          />
          <div className={styles.section_container_item}>
            <h1>Lashes</h1>
            <span className={styles.description}>
              <p>
                Lashes refer to the cosmetic enhancement of eyelashes, typically through techniques such as eyelash
                extensions, lash lifts, or lash tinting. These services aim to enhance the length, thickness, and
                curliness of natural eyelashes.
              </p>
            </span>
            <span className={styles.pricing}>
              <p>
                <strong>Services:</strong>
                <br />
                - Classic lash extensions: $80
                <br />
                - Volume lash extensions: $100
                <br />- Lash lift and tint: $60
              </p>
            </span>
          </div>
        </section>
        <section className={styles.section_container}>
          <img
            className={styles.section_container_item}
            src='extension.jpeg'
            alt=''
          />
          <div className={styles.section_container_item}>
            <h1>Nail Arts</h1>
            <span className={styles.description}>
              <p>
                Nail art refers to the creative decoration of fingernails and toenails, often using techniques such as
                nail painting, nail stickers, nail decals, and nail stamping. Nail art allows individuals to express
                their creativity and style through unique nail designs.
              </p>
            </span>
            <span className={styles.pricing}>
              <p>
                <strong>Services:</strong>
                <br />
                - Nail painting: $15 and up
                <br />
                - Nail stamping: $20 and up
                <br />- 3D nail art: $30 and up
              </p>
            </span>
          </div>
        </section>
        <Button>Book Now!</Button>
      </main>
    </>
  );
};

export default Services;

/* <div className={styles.service_container}>
        {services.map((service) => (
          <Service
            id={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
        <Button>Book Today!</Button>
      </div> */

// const services = [
//   {
//     id: 1,
//     title: "Manicure",
//     image: "manicure.jpeg",
//     description: (
//       <>
//         Manicure service including but not limited to
//         <br></br>
//         cutting, filing, and shaping nails
//       </>
//     ),
//   },
//   {
//     id: 2,
//     title: "Pedicure",
//     image: "pedicure.jpeg",
//     description: (
//       <>
//         Pedicure service with toenail cutting, cuticle removal
//         <br></br>
//         shaping, buffing, and much more
//       </>
//     ),
//   },
//   {
//     id: 3,
//     title: "Nail Art",
//     image: "art.webp",
//     description: (
//       <>
//         Will decorate and enchance your nail style.
//         <br />
//         Bring a picture of what you want or ask for a recommendation
//       </>
//     ),
//   },
//   {
//     id: 4,
//     title: "Nail Extension",
//     image: "extension.jpeg",
//     description: (
//       <>
//         Get the nail extension of your choice
//         <br />
//         with either the gel or the acrylics
//       </>
//     ),
//   },
// ];
