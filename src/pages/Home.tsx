import { useState } from 'react';
import { GameScreenSelect } from '@/screens/GameScreenSelect';
import GameDebug from '@/pages/GameDebug';
import { useWindowSize } from '@/hooks/useWindowSize';
import styles from './Home.module.css';

function Home() {
  const initialWindowSize = useWindowSize();
  const { getWindowSize } = initialWindowSize;
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
    isLandscape: boolean;
  }>(initialWindowSize);

  return (
    <div
      className={styles.home}
      style={{
        width: `${windowSize.width}px`,
        height: `${windowSize.height}px`,
      }}
    >
      <GameScreenSelect
        size={windowSize}
        setSize={() => {
          const newWindowSize = getWindowSize();
          console.log('resizing to', newWindowSize);
          setWindowSize(newWindowSize);
        }}
      />
      <GameDebug />
    </div>
  );
}

export default Home;
