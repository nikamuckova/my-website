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
      <MainRow>
        <MainCol>
          <ContactForm />
        </MainCol>
        <MainCol>
          <img
            src={ContactImage}
            alt="Programming girl"
            className={styles.imageDimension}
          />
        </MainCol>
      </MainRow>
    </Container>
  </Layout>
)
