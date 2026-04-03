import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export default function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...rest
}: Props) {
  const v = styles[variant] ?? styles.primary;
  return (
    <button type={type} className={`${styles.btn} ${v} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
