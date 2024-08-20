// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// const Home = lazy(() => import('./Home/Home'));
// const Movies = lazy(() => import('./Movies/Movies'));
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
