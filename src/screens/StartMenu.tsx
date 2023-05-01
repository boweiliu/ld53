import styles from './StartMenu.module.css';
import { Button } from '@/components/Button';

export function StartMenu() {
  return (
    <div className={styles.startMenuContainer}>
      <div className={styles.gameTitleContainer}>
        <div>PackageBots</div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.buttonContainer}>
            <Button>Tutorial</Button>
          </div>
          <div className={styles.buttonContainer}>
            <Button disabled>Campaign</Button>
          </div>
          <div className={styles.buttonContainer}>
            <Button disabled>Sandbox</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
