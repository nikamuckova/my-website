import React from "react"
import styles from "./mystyle.module.css"
import { Icon } from "antd"

export default () => (
  <div className={styles.footer}>
    <a
      href="https://github.com/nikamuckova"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.media}
    >
      <Icon type="github" />
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
      href="https://www.instagram.com/nikamuckova/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.media}
    >
      <Icon type="instagram" />
    </a>
    <a
      href="https://twitter.com/NikolaMuckova"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.media}
    >
      <Icon type="twitter" />
    </a>
  </div>
)
