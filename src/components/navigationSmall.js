import React, { useState } from "react"
import { Link } from "gatsby"
import { Icon } from "antd"

import styles from "../components/mystyle.module.css"

export default () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(isMenu => !isMenu)
  }
  return (
    <div>
      {!isMenuOpen && (
        <div className={styles.right}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <Icon type="menu" style={{ fontSize: "18px" }} />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className={styles.right}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <Icon type="close" style={{ fontSize: "18px" }} />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className={styles.navLinks}>
          <Link
            activeClassName={styles.active}
            className={styles.menuItem}
            to="/"
          >
            About me
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.menuItem}
            to="/skills"
          >
            Skills
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.menuItem}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.menuItem}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}
