import '../styles/FloatingButton.css';

export function FloatingButton({ title }) {
  return (
    <a href='#' className='floating-button'>
      <span className='floating-button-content'>{title}</span>
    </a>
  );
}
