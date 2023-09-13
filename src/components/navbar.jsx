import Search from '../assets/search.png';
import Tv from '../assets/tv.png';
import Menu from '../assets/menu.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const redirect = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const loadMoviePage = (word) => {
    redirect(`/search/${word}`);
  }
  return (
    <>    
      <header>
        <div className='moviebox'>
          <button><img alt='click' src={Tv} /></button>
          <h2>Moviebox</h2>
        </div>
        <div className='searchbar'>
          <div className='search-it'>
            <input type='search' placeholder='Search' onChange={(e)=> setSearchInput(e.target.value)}/>
            <button><img alt='click' src={Search}  onClick={()=>loadMoviePage(searchInput)}/></button>
          </div>
        </div>
        <div className='signin'>
          <p>Sign in</p>
          <button><img alt='click' src={Menu} /></button>
        </div>
      </header>
    </>
  )
};

export default Navbar;
