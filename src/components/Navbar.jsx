import '../styles/navbar.css';
import { XIcon } from './Icons.jsx';
import { useClassName } from '../hooks/useClassName.js';

export function Navbar({ showSide, closeSide }) {
  const className = useClassName({ showSide });

  return (
    <>
      <div className='background'>
        <aside className={className}>
          <div className='close-button-container'>
            <button onClick={closeSide} className='close-button'>
              <XIcon />
            </button>
            <div className='img-logo-background'></div>
          </div>

          <nav className='nav'>
            <ul className='list'>
              {linkList.map((item) => (
                <li key={item.id}>
                  <a className='list-item' title={item.label} href='#'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

const linkList = [
  {
    id: 0,
    title: 'Ayuda y sugerencias',
    label:
      'Pagina de ayuda para realizar sugerencias o resolver todas tus dudas',
  },
  { id: 1, title: 'Comprar', label: 'Comprar casa en España' },
  { id: 2, title: 'Alquilar', label: 'Alquilar casas en España' },
  { id: 3, title: 'Vender', label: 'Vender' },
  { id: 4, title: 'Actualidad', label: 'Fotocasa Life' },
  {
    id: 5,
    title: 'Indice de precios',
    label:
      'Informe, análisis y evolución del euribor y el prcio medio de la vivienda en España por IESE',
  },
  { id: 6, title: 'Guia de barrios', label: 'Guía de barrios' },
  { id: 7, title: 'Novedades', label: 'Novedades' },
  {
    id: 8,
    title: 'Buscador de Inmobiliarias',
    label: 'Buscador de Inmobilarias',
  },
  { id: 9, title: 'Tasacion online', label: 'Tasacion online' },
  { id: 10, title: 'Hipotecas', label: 'Compara tu hipoteca' },
  {
    id: 11,
    title: 'Publicadores profesionales',
    label: 'Publica y gestiona tus inmuebles con Fotocasa',
  },
  {
    id: 12,
    title: 'Publicadores particulares',
    label: 'Publica tu anuncio gratis en Fotocasa',
  },
  { id: 13, title: 'Vende con agencia', label: 'Vende con agencia' },
  { id: 14, title: 'Fotocasa Seguros', label: 'Seguros de alquiler' },
];
