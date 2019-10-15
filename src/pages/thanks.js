import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Container from "../components/container"
import ContactImage from "../images/undraw_contact_us.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import ContactForm from "../components/contactForm"
import { MainRow, MainCol } from "../components/grid"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Contact me!" />

      <div className={styles.thanks}>
        <b style={{ fontSize: "25px" }}>Thank you!</b>
        <p style={{ fontSize: "18px" }}>Your message has been received.</p>
      </div>
      <img
        src={ContactImage}
        alt="Programming girl"
        className={styles.imageDimension}
      />
    </Container>
  </Layout>
)
