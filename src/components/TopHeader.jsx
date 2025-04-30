import {
  BellIcon,
  HeartIcon,
  MegaphoneIcon,
  MenuIcon,
  UserIcon,
} from './Icons';
import '../styles/TopHeader.css';
import { LinkButton } from './LinkButton';
import { Navbar } from './Navbar';
import { LogoHeader } from './LogoHeader';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useState } from 'react';

export function TopHeader() {
  const [showSide, setShowSide] = useState(false);
  const width = useWindowWidth();

  const handleOpenSide = () => {
    setShowSide(true);
  };

  const handleCloseSide = () => {
    setShowSide(false);
  };

  return (
    <header className='header'>
      {showSide && (
        <Navbar showSide={showSide} closeSide={() => handleCloseSide()} />
      )}
      <div className='flex-container'>
        <div>
          <button
            onClick={handleOpenSide}
            className='menu-button'
            aria-label='Menu'
          >
            <MenuIcon />
          </button>
        </div>

        <LogoHeader width={width} />

        {width > 1280 && (
          <div className='flex-container'>
            <LinkButton width={width} title='Comprar' link />
            <LinkButton width={width} title='Alquilar' link />
          </div>
        )}
      </div>

      <div className='flex-container'>
        <div className={`flex-container ${width > 1200 && 'more-gap'}`}>
          {width > 1280 && (
            <LinkButton width={width} title='Mis Alertas' link>
              <BellIcon />
            </LinkButton>
          )}

          <LinkButton width={width} title='Mis listas' link>
            <HeartIcon />
          </LinkButton>

          <LinkButton width={width} title='Nuevo para ti'>
            <MegaphoneIcon />
          </LinkButton>
        </div>

        <div>
          <a
            className={`publica-button ${width > 600 && 'plus-padding'}`}
            href='#'
          >
            {width > 1500 ? 'Publicar anuncio gratis' : 'Publica'}
          </a>
        </div>

        <div>
          <button className='acceder-button'>
            {width > 600 && (
              <span>
                <UserIcon />
              </span>
            )}
            <span>Acceder</span>
          </button>
        </div>
      </div>
    </header>
  );
}
