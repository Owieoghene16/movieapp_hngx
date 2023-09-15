import './home.css'
import Imob from '../assets/imob.png';
import Tomatoe from '../assets/tomato.png';
import { AiOutlineHeart } from 'react-icons/ai'
import Footer from '../components/footer.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../assets/search.png';
import Tv from '../assets/tv.png';
import Menu from '../assets/menu.png';
import ClipLoader from "react-spinners/ClipLoader";

const Searchpage = () => {
  const { word } = useParams();
  const redirect = useNavigate();
  const [searchValue, setSearchValue] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [changeIcon, setChangeIcon] = useState(false);
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`,  
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTkxZGU2ZWU5ZGM4ZTU1YzJiY2M3YTIwY2MwYTc1NiIsInN1YiI6IjY1MDA1YTFiZDdkY2QyMDBhY2IwNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xk2gatk5wsYEPGcosnmfqzG0Pp9UbOCdEUIr2zOG2TU'
    }
  };
  const searchMovie = async () => {
    try {
      setLoading(true);
      const res = await axios.request(options);
      setSearchValue(res.data.results);
      console.log(res.data.results, 'datttttaa');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const openUrl = (id) => {
    redirect(`/movies/${id}`)
  };
  const loadMoviePage = (word) => {
    redirect(`/search/${word}`);
    window.location.reload(true)
  }
  const toggleFavorite = (e) => {
    const button = e.currentTarget;
    button.classList.toggle('favorite');
    if (button.classList.contains('favorite')) {
      button.Color = 'red';
    } else {
      button.Color = 'white';
    }
  };
  useEffect(() => {
    searchMovie();
  }, []);


  return (
    <>
      <section className='first-screen'>
        <div className='search-container'>
          <header>
            <div className='moviebox'>
              <button><img alt='click' src={Tv} /></button>
              <h2>Moviebox</h2>
            </div>
            <div className='searchbar'>
              <div className='search-it'>
                <input type='search' placeholder='Search' onChange={(e)=> setSearchInput(e.target.value)} />
                <button><img alt='click' src={Search} onClick={()=>loadMoviePage(searchInput)} /></button>
              </div>
            </div>
            <div className='signin'>
              <p>Sign in</p>
              <button><img alt='click' src={Menu} /></button>
           </div>
          </header>
        </div>
      </section>
      <section className="movielist">
        <div className='main-list'>
          <div className='list-header'>
            <div className='header-main-search'>
              <h2>Results</h2>
            </div>
          </div>
          <div className='movie-container'>
            {
              loading ?
              <div className='loaded-center'> 
                <ClipLoader
                  color={'steelblue'}
                  loading={loading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                </div> :
                searchValue.map((movie) => (
                  <div className='movie-list' data-testid= 'movie-card' key={movie.id}>
                    <div className='moviepic'>
                      <img alt='movieimage' data-testid='movie-poster' onClick={() => openUrl(movie.id)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                      <button type="button" className="fav-icon" onClick={(e) => toggleFavorite(e)}><AiOutlineHeart/></button>
                    </div>
                    <div className='about'>
                      <p data-testid='movie-release-date' >{movie.release_date}</p>
                      <h2 data-testid= 'movie-title' >{movie.original_title}</h2>
                      <div className='movie-rating'>
                        <div className='left'>
                          <button><img alt='imob' src={Imob} /></button>
                          <p>{movie.vote_average}/10</p>
                        </div>
                        <div className='right'>
                          <button><img alt='imob' src={Tomatoe} /></button>
                          <p>{movie.vote_average * 10}%</p>
                        </div>
                      </div>
                      <p2>Action, Adventure, Horror</p2>
                    </div>
                  </div>
                ))
              }         
          </div>
        </div>
      </section>
      <section className='ending'>
        <Footer />
      </section>
    </>
  )
};

export default Searchpage;
