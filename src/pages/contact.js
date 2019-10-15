import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Container from "../components/container"
import ContactImage from "../images/undraw_contact_us.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import ContactForm from "../components/contactForm"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Contact me!" />
      <div className={styles.flexContainer}>
        <div className={styles.insideContainer}>
          <ContactForm />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={ContactImage}
            alt="Programming girl"
            className={styles.imageDimension}
          />
        </div>
      </div>
    </Container>
  </Layout>
)
