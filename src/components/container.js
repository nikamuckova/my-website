import React from "react"
import styles from "./mystyle.module.css"

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)
