import { Link } from 'react-router-dom';

function NotFound() {
  const origin = window.location.origin || 'http://localhost:5173';

  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
      <iframe
        title="nest-test"
        style={{
          border: '0px',
          width: '948px',
          height: '533px',
          position: 'absolute',
          left: 0,
        }}
        sandbox="allow-scripts allow-pointer-lock"
        allowFullScreen
        src={`${origin}/index.html`}
      />
      <div style={{ height: '533px' }}>spacer</div>
      <h2>blah blah</h2>
      <h2>blah blah</h2>
      <h2>blah blah</h2>
    </>
  );
}

export default NotFound;
