import '../styles/SellSection.css';
import { Gradient } from './Gradient';

export function SellSection() {
  return (
    <section className='sell-section'>
      <div className='section'>
        <h2 className='sell-main-title'>
          Te acompañamos para que vendas o alquiles tu propiedad
        </h2>
        <h3 className='sell-subtitle'>
          Publica tus anuncios en Fotocasa y llega a millones de personas cada
          semana
        </h3>
        <div className='text-align-center'>
          <Gradient />
        </div>
        <div className='sell-articles'>
          {sellArticleList.map((item) => (
            <article key={item.id}>
              <a href='#' className='sell-article'>
                <div className='sell-img-wrapper'>
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className='sell-content'>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button href='#'>{item.linkTitle}</button>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const sellArticleList = [
  {
    id: 0,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_publishers_professionals.jpg',
    alt: 'Man with a tablet',
    title: 'Si eres profesional',
    description:
      'Haz crecer tu negocio con packs y soluciones exclusivas pensadas para ti.',
    linkTitle: 'Te informamos sin compromiso',
  },
  {
    id: 1,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_publishers_particular.jpg',
    alt: 'Woman unpacking',
    title: 'Si eres particular',
    description:
      'Publica tu vivienda en Fotocasa y te ayudamos a darle más visibilidad para llegar a todas las personas interesadas en encontrar vivienda.',
    linkTitle: 'Publica tu inmueble gratis',
  },
];
