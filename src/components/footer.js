import React from "react"
import styles from "./mystyle.module.css"
import { Icon } from "antd"

export default () => (
  <div className={styles.footer}>
    <a href="https://github.com/nikamuckova">
      <Icon type="github" className={styles.media} />
    </a>
    <a href="https://www.linkedin.com/in/nikola-m%C3%BA%C4%8Dkov%C3%A1-16991812a/">
      <Icon type="linkedin" className={styles.media} />
    </a>
    <a href="https://www.instagram.com/nikamuckova/">
      <Icon type="instagram" className={styles.media} />
    </a>
  </div>
)
