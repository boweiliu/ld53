import { useState } from 'react';
import classnames from 'classnames';
import { RotationCheck } from '@/screens/RotationCheck';
import styles from './GameScreenSelect.module.css';
import { FullscreenContext } from '@/hooks/useFullscreen';

export function GameScreenSelect(props: {
  size: { isLandscape: boolean; width: number; height: number };
  setSize: () => void;
  fullscreenContext: FullscreenContext;
}) {
  const {
    size: { isLandscape, width, height },
  } = props;
  const [screenState, setScreenState] = useState<string>('rotationCheck');

  return (
    <>
      {screenState === 'rotationCheck' ? (
        <RotationCheck {...props} onStart={() => setScreenState('startMenu')} />
      ) : null}

      {screenState !== 'rotationCheck' ? (
        <div
          className={classnames(
            styles.rotationContainer,
            isLandscape ? undefined : styles.rotate
          )}
          style={{
            width: isLandscape ? width : height,
            height: isLandscape ? height : width,
            top: isLandscape ? 0 : height,
          }}
        >
          hello world
        </div>
      ) : null}
    </>
  );
}
