import { useState } from "react";
import logo from "../assets/unblue-logo.webp";
import { nav } from "../data/content";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.headRow}`}>
        <div className={styles.brand}>
          <img src={logo} alt='Unblue logo' className={styles.logo} />
          <span className={styles.brandName}>unblue</span>
        </div>

        <button
          type='button'
          className={styles.menuButton}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls='main-navigation'
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id='main-navigation'
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
