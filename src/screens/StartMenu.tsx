import styles from './StartMenu.module.css';
import { Button } from '@/components/Button';

export function StartMenu(props: { setScreenState: (s: string) => void }) {
  const { setScreenState } = props;
  return (
    <div className={styles.startMenuContainer}>
      <div className={styles.gameTitleContainer}>
        <div>PackageBots</div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => {
                setScreenState('play');
              }}
            >
              Tutorial
            </Button>
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
