import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import PortfolioImage from "../images/undraw_portfolio_update.svg"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import styles from "../components/mystyle.module.css"
import { MainRow, MainCol } from "../components/grid"
import { Icon } from "antd"

export default () => (
  <Layout>
    <Container>
      <Header headerText="My portfolio" />
      <MainRow>
        <MainCol>
          <Paragraph
            paragraphText="
      Here you can find some of my own projects or projects I helped to build."
          />
        </MainCol>
        <MainCol>
          <img
            src={PortfolioImage}
            alt="Portfolio"
            className={styles.imageDimension}
          />
        </MainCol>
      </MainRow>
      <a href="#C4">
        <Icon type="arrow-down" style={{ fontSize: "30px", color: "black" }} />
      </a>

      <h2 id="C4">RememberMe</h2>
    </Container>
  </Layout>
)
