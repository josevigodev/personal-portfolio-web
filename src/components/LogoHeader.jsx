export function LogoHeader({ width }) {
  return (
    <div className='logo-container'>
      <a className='logo-container' href='#'>
        {width > 1280 && (
          <img
            className='img-query'
            src='https://frtassets.fotocasa.es/statics/img/fotocasa_anniversary_logo.svg'
            alt='Fotocasa Imagotype'
          />
        )}
        {width < 600 ? (
          <img
            src='https://frtassets.fotocasa.es/statics/img/mobile_logo.svg'
            alt='Logo de Fotocasa'
          />
        ) : (
          <img
            className='img-logo'
            src='https://frtassets.fotocasa.es/statics/img/logo.svg'
            alt='Logo de Fotocasa'
          />
        )}
      </a>
    </div>
  );
}
