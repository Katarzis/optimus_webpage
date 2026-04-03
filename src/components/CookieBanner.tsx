import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'optimus_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.wrap} role="dialog" aria-labelledby="cookie-title" aria-live="polite">
      <div className={`container ${styles.inner}`}>
        <div>
          <p id="cookie-title" className={styles.title}>
            Sütik és adatvédelem
          </p>
          <p className={styles.text}>
            Weboldalunk a működéshez szükséges sütiket használhat. A „Elfogadom” gombbal hozzájárulsz a nem feltétlenül
            szükséges sütikhez is, a beállításokat később módosíthatod. Részletek az{' '}
            <a href="#adatkezeles">adatkezelési tájékoztatóban</a>.
          </p>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.btnPrimary} onClick={accept}>
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
