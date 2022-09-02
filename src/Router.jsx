import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Dols from './routes/Dols';
import Playlist from './routes/Playlist';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce-dols" element={<Dols />} />
          <Route path="/noise2" element={<Dols />} />
          <Route path="/noise3" element={<Dols />} />
          <Route path="/noise4" element={<Dols />} />
          <Route path="/noise5" element={<Dols />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
