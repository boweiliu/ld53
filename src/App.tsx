import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import GameDebug from '@/pages/GameDebug';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameDebug" element={<GameDebug />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
