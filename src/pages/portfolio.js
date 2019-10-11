import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import PortfolioImage from "../images/undraw_portfolio_update.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import styles from "../components/mystyle.module.css"

export default () => (
  <Layout>
    <Container>
      <Header headerText="My portfolio" />
      <div className={styles.flexContainer}>
        <img
          src={PortfolioImage}
          alt="Portfolio"
          className={styles.imageDimension}
        />
        <Paragraph
          paragraphText="
      Here you can find some of my own projects or projects I helped to build."
        />
      </div>
    </Container>
  </Layout>
)
