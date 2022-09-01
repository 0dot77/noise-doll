import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Dols from './routes/Dols';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce-dols" element={<Dols />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
