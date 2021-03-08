import React from "react"
import Header from "../components/header"
import styles from "../components/mystyle.module.css"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import GirlImage from "../images/profile.jpg"
import CircleImage from "../images/okrasa-kruh.svg"

import { Layout } from "../components/layout"
import { MainRow, MainCol } from "../components/grid"
import ContactForm from "../components/contactForm"

import { Icon } from "antd"
import TelegramImg from "./../images/telegram.svg"
import TelegramPinkImg from "./../images/telegram_pink.svg"

export default () => (
  <Layout>
    <Container>
      <Header headerText="BE by Nikola Múčková" />

      <MainRow>
        <MainCol>
          <ContactForm />
          {/* <Paragraph paragraphText="I am a 26 years old Junior Front-end Developer, and I am currently searching for new job opportunities. After graduation in international relations and working in sales, I have finally found my passion in programming." /> */}
        </MainCol>
        <MainCol>
          <div className={styles.imageContainer}>
            <img
              src={CircleImage}
              alt="Programming girl"
              className={styles.circleImg}
            />

            <img
              src={GirlImage}
              alt="Programming girl"
              className={styles.profileImg}
            />
          </div>
        </MainCol>
      </MainRow>

      <MainRow>
        <div className={styles.quotation}>
          „Sen, ktorý snívate sami, je len snom. Sen, ktorý snívate spolu s
          nami, je realitou.“ <br /> Neváhaj a pridaj sa k nám!
        </div>
      </MainRow>
      <div className={styles.icons}>
        <a
          href="https://telegram.me/nikamuckova"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.media}
        >
          <svg
            className={styles.svg}
            id="Bold"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-m%C3%BA%C4%8Dkov%C3%A1-16991812a/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.media}
        >
          <Icon type="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/nika.muckova/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.media}
        >
          <Icon type="instagram" />
        </a>
        <a
          href="mailto:nikolkamuckova@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.media}
        >
          <Icon type="mail" />
        </a>
      </div>
    </Container>
  </Layout>
)
