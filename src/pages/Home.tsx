import { useRef, useCallback } from 'react';

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
}

function Home() {
  console.log('hi there!');

  testSandbox();

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
        });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <button type="button" onClick={() => makeFullscreen()}>
        fullscreen
      </button>
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
