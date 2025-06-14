import '../styles/Footer.css';
import { CopyIcon, SendIcon } from './Icons';

export function Footer() {
  const handleCopy = () => {
    navigator.clipboard.writeText('josevigodev@gmail.com');
  };

  return (
    <footer className='footer h-90 bg-[#5554] flex items-center justify-center'>
      <div className='footer-content px-3.5 opacity-0 scale-55 flex flex-col flex-1 max-w-5xl'>
        <div className='footer-r-1'>
          <h2 className='footer-title pb-6 font-bold text-5xl md:text-7xl animated-gradient-text'>
            Jose Vigo.
          </h2>
          <div className='flex-row-container contact-info'>
            <p>josevigodev@gmail.com</p>
            <button onClick={handleCopy}>
              <CopyIcon />
            </button>
            <a href='mailto:josevigodev@gmail.com'>
              <SendIcon />
            </a>
          </div>
        </div>
        <p className='footer-copy border-t-2 pt-6 border-subtitle'>
          Copyright © 2025 - Jose Vigo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
