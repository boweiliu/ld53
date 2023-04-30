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
      <div style={{ textAlign: 'center' }}> test center </div>
      <iframe
        title="nest-test"
        style={{
          border: '0px',
          width: '100px',
          height: '100px',
          left: 0,
        }}
        sandbox="allow-scripts allow-pointer-lock"
        allowFullScreen
        src="https://www.example.com/index.html"
      />
    </div>
  );
}

export default Home;
