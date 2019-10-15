import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import GirlImage from "../images/adventure.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Hi, I'm Nikola!" />
      <div className={styles.flexContainer}>
        <div className={styles.insideContainer}>
          <Paragraph
            paragraphText="
      I am 25 years old Junior Front-end developer and I am currently searching
      for a new job opportunities."
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={GirlImage}
            alt="Programming girl"
            className={styles.imageDimension}
          />
        </div>
      </div>
    </Container>
  </Layout>
)
