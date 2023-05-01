import { useState } from 'react';
import classnames from 'classnames';
import styles from './RotationCheck.module.css';
import GameDebug from '@/pages/GameDebug';
import { FullscreenContext } from '@/hooks/useFullscreen';
import { Button } from '@/components/Button';

export function RotationCheck(props: {
  size: { isLandscape: boolean };
  setSize: () => void;
  onStart: () => void;
  fullscreenContext: FullscreenContext;
}) {
  const { size, setSize, onStart, fullscreenContext } = props;
  const [screenState, setScreenState] = useState<number>(0);

  return (
    <>
      <div className={styles.container}>
        Game runs best in fullscreen landscape!{' '}
        <Button
          type="button"
          disabled={!fullscreenContext.supportsFullscreen}
          onClick={() => {
            fullscreenContext.toggleFullscreen().then(() => setSize());
          }}
        >
          Toggle fullscreen
        </Button>
        <br />
        <br />
        Rotate your head now,
        <br />
        or rotate your device and refresh!
        <br />
        <br />
        <Button type="button" onClick={() => setSize()}>
          Got it, resize now please!
        </Button>
        <br />
        <br />
        <div
          className={classnames(
            styles.startGameButtonContainer,
            size.isLandscape ? undefined : styles.rotated
          )}
        >
          <Button type="button" onClick={() => onStart()}>
            Start game!
          </Button>
        </div>
        <div style={{ height: '12px' }} />
      </div>
      <GameDebug />
    </>
  );
}
