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
          <Paragraph paragraphText="I am a 25 years old Junior Front-end Developer, and I am currently searching for new job opportunities. After graduation in international relations and working in sales, I have finally found my passion in programming." />
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
