import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>Optimus Accounting Kft.</p>
          <p className={styles.muted}>Könyvelés és tanácsadás — Kecskemét</p>
        </div>
        <div>
          <p className={styles.heading}>Gyors linkek</p>
          <ul className={styles.links}>
            <li>
              <Link to="/szolgaltatasok">Szolgáltatások</Link>
            </li>
            <li>
              <Link to="/kapcsolat">Kapcsolat</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.heading}>Jogi</p>
          <ul className={styles.links}>
            <li>
              <a href="#adatkezeles">Adatkezelés</a>
            </li>
            <li>
              <a href="#aszf">Általános szerződési feltételek</a>
            </li>
          </ul>
          <p className={styles.hint}>A végleges jogi szövegeket szakjogász ellenőrizze.</p>
        </div>
      </div>
      <div className={styles.bar}>
        <div className="container">
          <p className={styles.copy}>© {year} Optimus Accounting Kft. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
