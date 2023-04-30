function Home() {
  console.log('hi there!');

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log('fetched', json));

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
