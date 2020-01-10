import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph2 from "../components/paragraph2"
import Container from "../components/container"
import SkillsImage from "../images/undraw_static_assets.svg"
import { Layout } from "../components/layout"
import { MainRow, MainCol } from "../components/grid"

export default () => (
  <Layout>
    <Container>
      <Header headerText="Skills" />
      <MainRow>
        <MainCol>
          <p>I know everything</p>
          <h1 id="C4">Front-end Frameworks and Libraries</h1>
          <Paragraph2 paragraph2Text="React/jQuery/Next.js/Gatsby/Bootstrap/Foundation/Ant Design" />
          <h1 id="C4">Languages</h1>
          <Paragraph2 paragraph2Text="JavaScript (ES6+)/TypeScript/HTML5/CSS/Sass" />
          <h1 id="C4">Methods & Tools</h1>
          <Paragraph2 paragraph2Text="Node.js/Gulp/webpack/Redux/ESLint/git" />
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
