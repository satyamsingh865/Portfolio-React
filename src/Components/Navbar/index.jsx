import styles from "./styles.module.css";

function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">Satyam Singh</a>
      </div>
      <div className={styles.nav_right}>
        <a href="#about" className={styles.nav_link}>
          <span>01.</span>About
        </a>
        {/* <a href="#experience" className={styles.nav_link}>
          <span>02.</span>Experience
        </a> */}
        <a href="#work" className={styles.nav_link}>
          <span>02.</span>Work
        </a>
        <a href="#contact" className={styles.nav_link}>
          <span>03.</span>Contact
        </a>
        <a
          href="https://docs.google.com/document/d/1KxiRLCumZBOqfpMN5s2JYafg9_q_rOy3qmj3o69VYhU/edit"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.nav_resume_btn}>Resume</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
