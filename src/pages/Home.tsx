import { GameScreenSelect } from '@/screens/GameScreenSelect';
import { useWindowSize } from '@/hooks/useWindowSize';
import styles from './Home.module.css';

function Home() {
  const { width, height } = useWindowSize();
  return (
    <div
      className={styles.home}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <GameScreenSelect />
    </div>
  );
}

export default Home;
