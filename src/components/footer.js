import React from "react"
import styles from "./mystyle.module.css"
import { Icon } from "antd"

export default () => (
  <div className={styles.footer}>
    <a href="https://github.com/nikamuckova">
      <Icon
        type="github"
        style={{ color: "black", fontSize: "25px", paddingRight: "10px" }}
      />
    </a>
    <a href="https://www.linkedin.com/in/nikola-m%C3%BA%C4%8Dkov%C3%A1-16991812a/">
      <Icon
        type="linkedin"
        style={{ color: "black", fontSize: "25px", paddingRight: "10px" }}
      />
    </a>
    <a href="https://www.instagram.com/nikamuckova/">
      <Icon type="instagram" style={{ color: "black", fontSize: "25px" }} />
    </a>
  </div>
)
