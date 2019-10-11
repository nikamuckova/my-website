import React from "react"
import Navigation from "./navigation"
import styles from "../components/mystyle.module.css"
import Footer from "../components/footer"

import "./layout.css"
import "antd/dist/antd.css"

export const Layout = ({ children }) => (
  <div className={styles.body}>
    <Navigation />
    {children}
    <Footer />
  </div>
)
