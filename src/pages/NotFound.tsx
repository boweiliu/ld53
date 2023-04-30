import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
      <iframe
        title="nest-test"
        style={{ width: '948px', height: '533px' }}
        sandbox="allow-scripts allow-pointer-lock"
        allowFullScreen
        src="http://localhost:5173/index.html"
      />
    </>
  );
}

export default NotFound;
