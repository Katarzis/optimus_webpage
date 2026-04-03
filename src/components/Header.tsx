import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const nav = [
  { to: '/', label: 'Főoldal', end: true },
  { to: '/rolunk', label: 'Rólunk' },
  { to: '/szolgaltatasok', label: 'Szolgáltatások' },
  { to: '/blog', label: 'Blog' },
  { to: '/kapcsolat', label: 'Kapcsolat' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} end>
          <span className={styles.logoText}>Optimus Accounting</span>
          <span className={styles.logoSub}>Kft.</span>
        </NavLink>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Menü bezárása' : 'Menü megnyitása'}
        </button>

        <nav id="site-nav" className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav} aria-label="Fő navigáció">
          <ul className={styles.list}>
            {nav.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
