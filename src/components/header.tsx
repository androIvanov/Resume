import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>A</span>
      <div>
        <button className={styles.headerBtn}>About Me</button>
        <button className={styles.headerBtn}>Skills</button>
        <button className={styles.headerBtn}>Portfolio</button>
        <button className={styles.contactBtn}>CONTACT ME</button>
      </div>
    </div>
  );
}
