import { useState } from 'react';

export function GameScreenSelect() {
  const [screenState, setScreenState] = useState<number>(0);

  return (
    <div>
      Game runs best in fullscreen landscape!
      <br />
      <br />
      Rotate your head now,
      <br />
      or rotate your device and refresh!
      <br />
      <br />
      <button type="button">Go fullscreen</button>
    </div>
  );
}
