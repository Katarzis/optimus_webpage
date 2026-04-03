import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Az oldal nem található.</p>
        <Link to="/" className={styles.link}>
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
}
