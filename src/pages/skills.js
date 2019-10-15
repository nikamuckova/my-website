import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import SkillsImage from "../images/undraw_static_assets.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Skills" />
      <div className={styles.flexContainer}>
        <div className={styles.insideContainer}>
          <Paragraph
            paragraphText="
      ..."
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            src={SkillsImage}
            alt="React girl"
            className={styles.imageDimension}
          />
        </div>
      </div>
    </Container>
  </Layout>
)
