import { ResponsiveImage } from './ResponsiveImage';
import '../styles/OpeningHeader.css';
import { CopyIcon, GithubIcon, LinkedinIcon, SendIcon } from './Icons';

export function OpeningHeader() {
  const handleCopy = () => {
    navigator.clipboard.writeText('josevigodev@gmail.com');
  };

  return (
    <div className='blur'>
      <header className='width-padding-container full-height flex-container opening-header'>
        <div className='flex-column-container principal-title-container'>
          <small>Hola soy</small>
          <h1 className='animated-gradient-text'>Jose Vigo</h1>
          <h2>Desarrollador Web Frontend</h2>
          <div className='flex-row-container contact-info'>
            <p>josevigodev@gmail.com</p>
            <button onClick={handleCopy}>
              <CopyIcon />
            </button>
            <a href='mailto:josevigodev@gmail.com'>
              <SendIcon />
            </a>
          </div>
          <div className='flex-row-container social-container'>
            <a
              className='flex-row-container social-link'
              href='https://www.linkedin.com/in/jose-vigo-a9a728365'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <span>
                <LinkedinIcon />
              </span>
              <span>Linkedin</span>
            </a>
            <a
              className='flex-row-container social-link'
              href='https://github.com/josevigodev'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <span>
                <GithubIcon />
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className='presentation-img-container'>
          <ResponsiveImage />
        </div>
      </header>
    </div>
  );
}
