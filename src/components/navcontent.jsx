import { BsPlayBtnFill } from 'react-icons/bs';
import Imob from '../assets/imob.png';
import Tomatoe from '../assets/tomato.png';

const Navcontent = () => {
  return (
    <div className='home-left'>
      <div className='first-para'>
        <h1>John Wick 3:</h1>
      </div>
      <div className='second-para'>
        <h1>Parabellum</h1>
      </div>
      <div className='first-rating'>
        <div className='left'>
          <button><img alt='imob' src={Imob} /> </button>
          <p>86.0/100</p>
        </div>
        <div className='right'>
          <button><img alt='imob' src={Tomatoe} /></button>
          <p>97%</p>
        </div>
      </div>
      <div className='about'>
        <p>
          John Wick is on the run after killing a member 
          of the international assassins guild, and with 
          a 14$ million price tag on his head, he is the 
          target of hitmen and women everywhere.
        </p>
      </div>
      <div className='first-click'>
        <button>
          <i><BsPlayBtnFill /></i>
          <p>Watch Trailer</p>
        </button>
      </div>
    </div>
  )
};

export default Navcontent;
