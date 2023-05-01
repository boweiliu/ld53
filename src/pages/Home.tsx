import { useRef, useState, useCallback } from 'react';
import { GameScreenSelect } from '@/screens/GameScreenSelect';
import GameDebug from '@/pages/GameDebug';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useFullscreen } from '@/hooks/useFullscreen';
import styles from './Home.module.css';

function Home() {
  const homeRef = useRef<HTMLDivElement>(null);

  const fullscreenContext = useFullscreen({ ref: homeRef });

  const initialWindowSize = useWindowSize();

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
    isLandscape: boolean;
  }>(initialWindowSize);

  const { getWindowSize } = initialWindowSize;

  const resetWindowSize = useCallback(() => {
    const newWindowSize = getWindowSize(fullscreenContext.isFullscreen);
    console.log('resizing to', newWindowSize);
    setWindowSize(newWindowSize);
  }, [getWindowSize, fullscreenContext.isFullscreen]);

  return (
    <div
      ref={homeRef}
      className={styles.home}
      style={{
        width: `${windowSize.width}px`,
        height: `${windowSize.height}px`,
      }}
    >
      <GameScreenSelect
        fullscreenContext={fullscreenContext}
        size={windowSize}
        setSize={() => {
          resetWindowSize();
        }}
      />
    </div>
  );
}

export default Home;
