import { useState } from 'react';
import { RotationCheck } from '@/screens/RotationCheck';

export function GameScreenSelect(props: {
  size: { isLandscape: boolean };
  setSize: () => void;
}) {
  const [screenState, setScreenState] = useState<string>('rotationCheck');

  return (
    <>
      {screenState === 'rotationCheck' ? (
        <RotationCheck {...props} onStart={() => setScreenState('startMenu')} />
      ) : null}
    </>
  );
}
