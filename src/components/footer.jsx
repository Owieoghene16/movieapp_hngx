import Twitter from '../assets/twitter.png';
import Yt from '../assets/yt.png';
import Ig from '../assets/ig.jpg';
import Facebook from '../assets/facebook.png';

const Footer = () => {
  return (
    <>   
      <footer>
        <div className='social-page'>
          <button><img alt='imob' src={Facebook} /></button>
          <button><img alt='imob' src={Ig} /></button>
          <button><img alt='imob' src={Twitter} /></button>
          <button><img alt='imob' src={Yt} /></button>
        </div>
        <div className='terms'>
          <p>Condition of use</p>
          <p>Privacy and Policy</p>
          <p>Press Room</p>
        </div>
        <div className='dedication'>
          <p>@2023 Moviebox By Kindness Okpugie</p>
        </div>
      </footer>
    </>
  )
};

export default Footer;