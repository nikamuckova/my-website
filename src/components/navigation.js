import React from "react"
import { Link } from "gatsby"

import styles from "../components/mystyle.module.css"

export default () => (
  <ul
    className={styles.largeMenu}
    style={{
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <li>
      <Link activeClassName={styles.active} to="/">
        About me
      </Link>
    </li>
    <li>
      <Link activeClassName={styles.active} to="/skills">
        Skills{" "}
      </Link>
    </li>
    <li>
      <Link activeClassName={styles.active} to="/projects">
        Projects
      </Link>
    </li>
    <li>
      <Link activeClassName={styles.active} to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)
