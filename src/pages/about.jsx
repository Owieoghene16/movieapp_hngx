import Poster from '../assets/Poster.png';
import Play from '../assets/play.png';
import Sidebar from '../components/sidebar.jsx';
import Footer from '../components/footer.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import './about.css';

const Movie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,  
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTkxZGU2ZWU5ZGM4ZTU1YzJiY2M3YTIwY2MwYTc1NiIsInN1YiI6IjY1MDA1YTFiZDdkY2QyMDBhY2IwNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xk2gatk5wsYEPGcosnmfqzG0Pp9UbOCdEUIr2zOG2TU'
    }
  };
  const getMovie = async () => {
    try {
      const res = await axios.request(options);
      setMovie(res.data);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div className='sidebar'> 
        <Sidebar />
      </div>
      <div className='about-container'>
        {
          loading ?
          <div className='load-center'> 
            <ClipLoader
              color={'steelblue'}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
           /> 
          </div>:
          
        <div className='about-content'>
          <div className='about-screen'>
            <img alt='about-screen' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
            <div className='about-play'>
              <button><img alt='imob' src={Play} /></button>
              <p>Watch Trailer</p>
            </div>
          </div>
          <div className='about-details'>
          <div className='ab-heading'>
            <h3 data-testid='movie-title' >{movie.original_title}</h3>
            <ul>
              <li data-testid='movie-release-date'>{movie.release_date}</li>
              <li data-testid='movie-runtime' >{movie.runtime}m</li>
            </ul>
            <p>Action</p>
            <p>Drama</p>
          </div>
        </div>
        <div className='about-data'>
          <div className='left'>
            <div className='deta'>
              <p data-testid='movie-overview' >
                {movie.overview}
              </p>
            </div>
            <div className='director'>
              <p>Director: <span>Joseph Kranacki</span></p>
            </div>
            <div className='director'>
              <p>Writer: <span>Joseph Kranacki, Zack sylder, Peter craig.</span></p>
            </div>
            <div className='director'>
              <p>Stars: <span>Tom cruise, Jennifer lopez, Miles Teller.</span></p>
            </div>
            <div className='top-rated'>
              <button>Top rated movie #65</button>
            </div>
          </div>
          <div className='right'>
            <div className='next-rated'>
              <button>See Showtime</button>
            </div>
            <div className='up-rated'>
              <button>More Watch Option</button>
            </div>
          </div>
        </div>
      </div>
        }
        
      <section className='ending'>
        <Footer />
      </section>
      </div>
    </>
  )
};

export default Movie;
