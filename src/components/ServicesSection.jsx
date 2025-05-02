import { Gradient } from './Gradient';
import '../styles/ServicesSection.css';
import { ServiceItem } from './ServiceItem';

export function ServicesSection() {
  return (
    <section className='service-section section'>
      <h2 className='services-main-title'>
        Te acompañamos con servicios a tu medida
      </h2>
      <h3 className='services-subtitle'>
        Para ayudarte, en cada paso, a elegir bien y tomar la mejor decisión
      </h3>
      <div className='text-align-center'>
        <Gradient />
      </div>
      <div className='for-gap'>
        {serviceList.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

const serviceList = [
  {
    id: 0,
    iconImage:
      'https://frtassets.fotocasa.es/statics/img/home_services_price_index_icon.svg',
    iconTitle: 'ÍNDICE DE PRECIOS',
    title: 'Consulta el precio de tu zona',
    info: 'Acompañarte es brindarte todos los datos, por eso desde 2005 publicamos mensualmente el índice inmobiliario Fotocasa.',
    buttonTitle: 'Calcula el precio medio',
    poster:
      'https://frtassets.fotocasa.es/statics/img/home_services_static_image_11.png',
    invert: false,
  },
  {
    id: 1,
    iconImage:
      'https://frtassets.fotocasa.es/statics/img/home_services_neightborhood_guide_icon.svg',
    iconTitle: 'GUIA DE BARRIOS',
    title: 'Conoce tu futuro barrio',
    info: 'Acompañarte es ayudarte a saber a dónde ir, por eso te damos toda la información para elegir tu barrio.',
    buttonTitle: 'Descubre tu barrio',
    poster:
      'https://frtassets.fotocasa.es/statics/img/home_services_static_image_12.png',
    invert: true,
  },
  {
    id: 2,
    iconImage:
      'https://frtassets.fotocasa.es/statics/img/home_services_value_home_icon.svg',
    iconTitle: 'VALORACION ONLINE',
    title: '¿Cuánto vale tu casa?',
    info: 'Calcula el precio en base a sus características y a otros pisos de la zona. Acompañarte es darte todas las herramientas sin coste.',
    buttonTitle: 'Valora tu casa',
    poster:
      'https://frtassets.fotocasa.es/statics/img/home_services_static_image_13.png',
    invert: false,
  },
];
