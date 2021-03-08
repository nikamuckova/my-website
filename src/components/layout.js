import React from "react"
import { Helmet } from "react-helmet"
import styles from "../components/mystyle.module.css"
import Footer from "../components/footer"

import "./layout.css"
import "antd/dist/antd.css"

export const Layout = ({ children }) => (
  <>
    <Helmet title="Nika Muckova" description="Networking at Be Academy" />
    <div className={styles.body}>
      <div
        className={styles.wrapper}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.main}>{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  </>
)
