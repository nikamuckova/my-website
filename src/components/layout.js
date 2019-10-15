import React from "react"
import Navigation from "./navigation"
import NavigationSmall from "./navigationSmall"
import styles from "../components/mystyle.module.css"
import Footer from "../components/footer"

import "./layout.css"
import "antd/dist/antd.css"

export const Layout = ({ children }) => (
  <div className={styles.body}>
    <div className={styles.largeMenu}>
      <Navigation />
    </div>
    <div className={styles.smallMenu}>
      <NavigationSmall />
    </div>
    {children}
    <Footer />
  </div>
)

/*TO DO:
- new menu for small screens
- edit button for flowFrom
- make fixed menu
- make own thank you site after user submit the form
*/
