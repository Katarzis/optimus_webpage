import type { ReactNode } from 'react';
import styles from './Section.module.css';

type Props = {
  id?: string;
  title?: string;
  intro?: string;
  variant?: 'default' | 'muted';
  children: ReactNode;
};

export default function Section({ id, title, intro, variant = 'default', children }: Props) {
  const className = variant === 'muted' ? `${styles.section} ${styles.muted}` : styles.section;
  return (
    <section id={id} className={className}>
      <div className="container">
        {title ? <h2 className={styles.heading}>{title}</h2> : null}
        {intro ? <p className={styles.intro}>{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
