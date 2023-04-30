import { useState } from 'react';
import classnames from 'classnames';
import styles from './GameScreenSelect.module.css';

export function GameScreenSelect(props: {
  size: { isLandscape: boolean };
  setSize: () => void;
}) {
  const { size, setSize } = props;
  const [screenState, setScreenState] = useState<number>(0);

  console.log(size);
  return (
    <div>
      Game runs best in fullscreen landscape!{' '}
      <button disabled type="button">
        Go fullscreen
      </button>
      <br />
      <br />
      Rotate your head now,
      <br />
      or rotate your device and refresh!
      <br />
      <br />
      <button type="button" onClick={() => setSize()}>
        Got it, resize now please!
      </button>
      <br />
      <br />
      <div
        className={classnames(
          styles.startGameButtonContainer,
          size.isLandscape ? undefined : styles.rotated
        )}
      >
        <button type="button">Start game!</button>
      </div>
      <div style={{ height: '12px' }} />
    </div>
  );
}
