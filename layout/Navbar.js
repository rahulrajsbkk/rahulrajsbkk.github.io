import React from 'react';
import styles from '../static/scss/navbar.module.scss';
import Logo from '../static/images/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Logo />
      </div>
      <div className={styles.navBarMenu}>
        <div
          className={`${styles.navBarMenuItem} ${styles.navBarMenuItemActive}`}
        >
          About
        </div>
        <div className={styles.navBarMenuItem}>Works</div>
        <div className={styles.navBarMenuItem}>Contact</div>
        <div className={styles.navBarMenuItem}>Let&apos;s Chat</div>
      </div>
    </nav>
  );
}

export default Navbar;
