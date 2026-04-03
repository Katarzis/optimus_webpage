import type { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, children, className = '' }: Props) {
  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
