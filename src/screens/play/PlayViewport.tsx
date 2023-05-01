import styles from './PlayViewport.module.css';

export function PlayViewport(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className={styles.playViewport}>
      viewport
      {children}
    </div>
  );
}
