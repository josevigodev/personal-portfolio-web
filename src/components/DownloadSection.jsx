import { useWindowWidth } from '../hooks/useWindowWidth';
import '../styles/DownloadSection.css';

export function DownloadSection() {
  const width = useWindowWidth();

  return (
    <section className='download-section'>
      <article className='section download-flex'>
        <div className='download-content'>
          <h3>Descubre la App que todo el mundo usa</h3>
          <p>
            Te acompañamos con la mejor app para encontrar o vender inmuebles
          </p>
          <div className='download-icons'>
            {iconList.map((item) => (
              <article key={item.id} className='download-icon-text'>
                <span>
                  <img src={item.image} alt='arbolito' />
                </span>
                <span>{item.text}</span>
              </article>
            ))}
            <div className='store-links'>
              <a
                href='https://itunes.apple.com/es/app/fotocasa/id332699841?mt=8'
                target='_blank'
                className='store-link'
              >
                <img
                  src='https://frtassets.fotocasa.es/statics/img/home_download_app_app_store_image.png'
                  alt='applestore'
                />
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=com.anuntis.fotocasa'
                className='store-link'
              >
                <img
                  src='https://frtassets.fotocasa.es/statics/img/home_download_app_google_play_image.png'
                  alt='playstore'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='download-img-wrapper'>
          <img
            src={
              width > 840
                ? 'https://frtassets.fotocasa.es/statics/img/home_download_app_static_qr_desktop_update.png'
                : '	https://frtassets.fotocasa.es/statics/img/home_download_app_static_image_mobile.webp'
            }
            alt='qr code'
          />
        </div>
      </article>
    </section>
  );
}

const iconList = [
  {
    id: 0,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_download_app_alert_icon2.svg',
    text: 'Crea alertas y te notificamos las novedades en tu móvil',
  },
  {
    id: 1,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_download_app_heart_icon.svg',
    text: 'Guarda tus favoritos y te avisamos si bajan de precio',
  },
  {
    id: 2,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_download_app_discart_icon.svg',
    text: 'Descarta los anuncios que no quieres volver a ver',
  },
  {
    id: 3,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_download_app_calculate_icon.svg',
    text: 'Calcula una estimación de tu cuota hipotecaria',
  },
];
