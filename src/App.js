import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/header/Header.js';
import Home from './pages/home/Home.js';
import MovieList from './components/movieList/MovieList.js';
import Movie from './pages/moviepage/Movie.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes >
          <Route index element={< Home />}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error loding page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
