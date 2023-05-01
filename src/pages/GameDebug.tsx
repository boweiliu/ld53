import { useRef, useCallback, useState } from 'react';
import { Button } from '@/components/Button';

function testSandbox() {
  // fetch? no - is blocked
  try {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log('fetched', json));
  } catch (e: unknown) {
    console.log(e, (e as Error)?.stack);
  }

  // all storage is blocked too
  try {
    localStorage.setItem('test', 'foo');
    console.log('got local storage', localStorage.getItem('test'));
  } catch (e: unknown) {
    console.log(e, (e as Error)?.stack);
  }

  console.log('window sizes:', window.innerHeight, window.innerWidth);
  console.log(
    'screen sizes:',
    window.screen.height,
    window.screen.width,
    window.screen.availHeight,
    window.screen.availWidth
  );
  const orientation = window.screen?.orientation ?? window.orientation;

  window.alert(
    `document fullscreen${window.document.fullscreenEnabled}webkit fullscreen${
      (window.document as any).webkitFullscreenEnabled
    }`
  );

  return {
    windowInnerHeight: window.innerHeight,
    windowScreenHeight: window.screen?.height,
    windowAvailHeight: window.screen?.availHeight,
    windowInnerWidth: window.innerWidth,
    windowScreenWidth: window.screen?.width,
    windowAvailWidth: window.screen?.availWidth,
    orientation: [orientation?.type, orientation?.angle, orientation],
    lorigin: window.location?.origin,
    origin: window.origin,
  };
}

function GameDebug() {
  console.log('hi there!');

  const [summary, setSummary] = useState<string>('');

  const getInfo = useCallback(() => {
    setSummary(JSON.stringify(testSandbox()));
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  // hmmm: Request for fullscreen was denied because Element.requestFullscreen() was not called from inside a short running user-generated event handler.
  const makeFullscreen = useCallback(() => {
    if (ref.current) {
      const el = ref.current;
      el.requestFullscreen?.()
        .then(() => {
          console.log('am fullscreen');
          testSandbox();
        })
        .catch((e) => {
          console.log(e, e.stack);
          window.alert(JSON.stringify([e, e.stack]));
        });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: 'red',
      }}
    >
      <Button type="button" onClick={() => makeFullscreen()}>
        fullscreen
      </Button>
      <Button type="button" onClick={() => getInfo()}>
        get info
      </Button>
      <h1>DEBUG</h1>
      <div style={{ textAlign: 'center' }}>centered text</div>
      <div
        style={{
          maxWidth: '200px',
          width: '200px',
          overflowWrap: 'break-word',
        }}
      >
        {summary}
      </div>
    </div>
  );
}

export default GameDebug;
