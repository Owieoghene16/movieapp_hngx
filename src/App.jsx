import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Movie from './pages/about.jsx';
import Searchpage from './pages/search.jsx';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movies/:id' element={<Movie />}></Route>
      <Route path='/search/:word' element={<Searchpage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
