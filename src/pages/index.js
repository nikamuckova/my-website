import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import GirlImage from "../images/adventure.svg"
import { Layout } from "../components/layout"
import { MainRow, MainCol } from "../components/grid"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Hi, I'm Nikola!" />

      <MainRow>
        <MainCol>
          <Paragraph paragraphText="I am 25 years old Junior Front-end developer, and I am currently searching for new job opportunities. I have graduated in international relations and worked as Sales Manager to finally find my happiness in programming." />
        </MainCol>
        <MainCol>
          <img
            src={GirlImage}
            alt="Programming girl"
            className={styles.imageDimension}
          />
        </MainCol>
      </MainRow>
    </Container>
  </Layout>
)
