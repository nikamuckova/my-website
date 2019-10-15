import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import SkillsImage from "../images/undraw_static_assets.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import { MainRow, MainCol } from "../components/grid"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Skills" />
      <MainRow>
        <MainCol>
          <Paragraph
            paragraphText="
      ..."
          />
        </MainCol>
        <MainCol>
          <img
            src={SkillsImage}
            alt="React girl"
            className={styles.imageDimension}
          />
        </MainCol>
      </MainRow>
    </Container>
  </Layout>
)
