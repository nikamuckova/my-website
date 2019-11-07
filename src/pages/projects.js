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
import SpolocneByvanie from "../images/SpolocneByvanie.png"

export default () => (
  <Layout>
    <Container>
      <Header headerText="My projects" />
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

      <div
        style={{ textAlign: "center", marginTop: "60px", marginBottom: "60px" }}
      >
        <a href="#C4">
          <Icon
            type="arrow-down"
            style={{ fontSize: "40px", color: "black" }}
          />
        </a>
      </div>

      <div id="C4">
        <MainRow>
          <MainCol>
            <h1>RememberMe</h1>
            <Paragraph2 paragraph2Text="Help with the creation of notification emails for the project RememberMe using ZURB Foundation framework." />
            <Paragraph2 paragraph2Text="Used technologies: Foundation, HTML, CSS" />
          </MainCol>
          <MainCol>
            <img
              src={RememberMe}
              alt="RememberMe"
              className={(styles.imageDimension, styles.imageBorder)}
            />
          </MainCol>
        </MainRow>
        <MainRow>
          <MainCol>
            <h1>Spoločné Bývanie</h1>
            <Paragraph2 paragraph2Text="Help with rewriting the code from Ember to React for the project Spoločné Bývanie." />
            <Paragraph2 paragraph2Text="Used technologies: React" />
          </MainCol>
          <MainCol>
            <img
              src={SpolocneByvanie}
              alt="Spoločné Bývanie"
              className={(styles.imageDimension, styles.imageBorder)}
            />
          </MainCol>
        </MainRow>
      </div>
    </Container>
  </Layout>
)
