import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "../components/mystyle.module.css"

export default () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(isMenu => !isMenu)
  }
  return (
    <div>
      <div className={styles.right}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.navLinks}>
          <Link className={styles.menuItem} to="/">
            About me
          </Link>
          <Link className={styles.menuItem} to="/skills">
            Skills
          </Link>
          <Link className={styles.menuItem} to="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.menuItem} to="/contact">
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}
