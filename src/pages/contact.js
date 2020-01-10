import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Container from "../components/container"
import ContactImage from "../images/undraw_contact_us.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import ContactForm from "../components/contactForm"
import { MainRow, MainCol } from "../components/grid"
import MyImage from "../images/me.jpg"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Contact me!" />
      <MainRow>
        <MainCol>
          <ContactForm />
        </MainCol>
        <MainCol>
          <div className={styles.contact}>
            <img src={MyImage} alt="Me" className={styles.myImage} />
            <div>
              <h1>Nikola Múčková</h1>
              <a className={styles.contactInfo} href="tel: +421 905 904 323">
                +421 905 904 323
              </a>
              <p>Hello test</p>
              <br />
              <a
                className={styles.contactInfo}
                href="mailto: nikolkamuckova@gmail.com"
              >
                nikolkamuckova@gmail.com
              </a>
            </div>
          </div>

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
