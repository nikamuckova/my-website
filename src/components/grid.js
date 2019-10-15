import React from "react"

import styles from "../components/mystyle.module.css"

export const MainRow = ({ children }) => (
  <div className={styles.row}>{children}</div>
)

export const MainCol = ({ children }) => (
  <div className={styles.item}>{children}</div>
)
