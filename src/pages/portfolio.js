import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import PortfolioImage from "../images/undraw_portfolio_update.svg"
import RememberMe from "../images/RememberMe.png"
import Footer from "../components/footer"
import { Layout } from "../components/layout"
import styles from "../components/mystyle.module.css"
import { MainRow, MainCol } from "../components/grid"
import { Icon } from "antd"
import Paragraph2 from "../components/paragraph2"

export default () => (
  <Layout>
    <Container>
      <Header headerText="My portfolio" />
      <MainRow>
        <MainCol>
          <Paragraph
            paragraphText="
      Here you can find some of my projects or projects I helped to build. "
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

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="#C4">
          <Icon
            type="arrow-down"
            style={{ fontSize: "40px", color: "black" }}
          />
        </a>
      </div>
      <div class={styles.line}></div>

      <MainRow>
        <MainCol>
          <h1 id="C4">RememberMe</h1>
          <Paragraph2 paragraph2Text="I helped to create variations of responsive HTML emails." />
        </MainCol>
        <MainCol>
          <img
            src={RememberMe}
            alt="RememberMe"
            className={styles.imageDimension}
          />
        </MainCol>
      </MainRow>
    </Container>
  </Layout>
)
