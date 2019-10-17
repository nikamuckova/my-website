import React from "react"
import { Helmet } from "react-helmet"
import Navigation from "./navigation"
import NavigationSmall from "./navigationSmall"
import styles from "../components/mystyle.module.css"
import Footer from "../components/footer"

import "./layout.css"
import "antd/dist/antd.css"

export const Layout = ({ children }) => (
  <>
    <Helmet
      title="Nika Muckova"
      description="I am a 25 years old Junior Front-end developer."
    />
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.largeMenu}>
          <Navigation />
        </div>
        <div className={styles.smallMenu}>
          <NavigationSmall />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  </>
)

/*TO DO:
- new menu for small screens
- edit button for flowFrom
- make fixed menu
- make own thank you site after user submit the form
*/
