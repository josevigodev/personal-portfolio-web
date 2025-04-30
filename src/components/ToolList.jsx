export function ToolList() {
  return (
    <ul className='tools-flex'>
      {toolList.slice(0, 6).map((item) => (
        <li key={item.id} className='flex-item'>
          <article className='article-item'>
            <a className='link-wrapper' href='#'>
              <span>
                <img src={item.image} alt='car-paint' />
              </span>
              <span>{item.title}</span>
            </a>
          </article>
        </li>
      ))}
    </ul>
  );
}

const toolList = [
  {
    id: 0,
    image: 'https://frtassets.fotocasa.es/statics/img/commute_time.svg',
    alt: 'car-paint',
    title: 'Buscar por trayecto',
  },
  {
    id: 1,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_services_neightborhood_guide_icon.svg',
    alt: 'bluid-paint',
    title: 'Guía de barrios',
  },
  {
    id: 2,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_services_value_home_icon.svg',
    alt: 'label-paint',
    title: 'Valora tu casa',
  },
  {
    id: 3,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_services_calculate_fee_icon.svg',
    alt: 'calculator-paint',
    title: 'Calcula tu hipoteca',
  },
  {
    id: 4,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_services_protect_home_icon.svg',
    alt: 'house-paint',
    title: 'Asegura tu hogar',
  },
  {
    id: 5,
    image:
      'https://frtassets.fotocasa.es/statics/img/home_services_sell_with_agency_icon.svg',
    alt: 'poster-paint',
    title: 'Vende con agencia',
  },
];
