import './home.css'
import { FaGreaterThan } from 'react-icons/fa';
import Imob from '../assets/imob.png';
import Tomatoe from '../assets/tomato.png';
import Navcontent from '../components/navcontent.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import 'swiper/css';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const redirect = useNavigate();
  const [movies, setMovies] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=b991de6ee9dc8e55c2bcc7a20cc0a756',  
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTkxZGU2ZWU5ZGM4ZTU1YzJiY2M3YTIwY2MwYTc1NiIsInN1YiI6IjY1MDA1YTFiZDdkY2QyMDBhY2IwNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xk2gatk5wsYEPGcosnmfqzG0Pp9UbOCdEUIr2zOG2TU'
    }
  };
  const loadTopTenMovie = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: 'b991de6ee9dc8e55c2bcc7a20cc0a756',
          language: 'en-US',
          page: 1
        },
      });
      setTopTen(res.data.results)
    } catch (err) {
      console.log(err)
    }
  }
  const loadUserMovie = async () => {
    try {
      const res = await axios.request(options);
      setMovies(res.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const openUrl = (id) => {
    redirect(`/movies/${id}`)
  };
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
    loadTopTenMovie();
    loadUserMovie();
  }, []);


  return (
    <>
      <section className='first-screen'>
        <div className='main-container'>
          <Navbar 
          />
          <main>
            <Navcontent />
          </main>
        </div>
      </section>
      <section className="movielist">
        <div className='main-list'>
          <div className='list-header'>
            <div className='header-left'>
              <h2>Top 10 Movies</h2>
            </div>
            <div className='header-right'>
              <p>See more</p>
              <i><FaGreaterThan /></i>
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
                topTen.slice(0, 10).map((movie) => (
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
          <p className='scroll-indicator'>Scroll</p>
        </div>
        <div className='main-list'>
          <div className='list-header'>
            <div className='header-left'>
              <h2>Featured Movies</h2>
            </div>
            <div className='header-right'>
              <p>See more</p>
              <i><FaGreaterThan /></i>
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
                movies.map((movie) => (
                  <div className='movie-list' data-testid='movie-card' key={movie.id}>
                    <div className='moviepic'>
                      <img alt='movieimage' data-testid='movie-poster' onClick={() => openUrl(movie.id)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                      <button type="button" className="fav-icon" onClick={(e) => toggleFavorite(e)}><AiOutlineHeart/></button>
                    </div>
                    <div className='about'>
                      <p data-testid='movie-release-date'>{movie.release_date}</p>
                      <h2 data-testid='movie-title'>{movie.original_title}</h2>
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

export default Home;
