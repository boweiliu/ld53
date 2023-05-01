import { PlayViewport } from '@/screens/play/PlayViewport';
import { PlayBoard } from '@/screens/play/PlayBoard';
import styles from './PlayScreen.module.css';

export function PlayScreen() {
  return (
    <div className={styles.playScreenContainer}>
      <PlayViewport>
        <PlayBoard />
      </PlayViewport>
      <PlayHud />
    </div>
  );
}

function PlayHud() {
  return null;
}
