import classnames from 'classnames';
import styles from './Button.module.css';

export function Button<
  PT extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>(props: PT) {
  const { children, className, disabled } = props;
  return (
    <button
      {...props}
      className={classnames(
        ...(className ?? []),
        styles.button,
        disabled && styles.disabled
      )}
      type="button"
    >
      {children}
    </button>
  );
}
