import styles from './StartMenu.module.css';
import { Button } from '@/components/Button';

export function StartMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.gameTitleContainer}>
        <div>PackageBots</div>
      </div>
      <div className={styles.body}>
        <Button>Tutorial</Button>
      </div>
    </div>
  );
}
