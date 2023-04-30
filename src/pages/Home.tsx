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
}

function Home() {
  console.log('hi there!');

  testSandbox();

  return (
    <div
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
