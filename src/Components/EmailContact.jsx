import { CopyIcon, SendIcon } from './Icons';

export function EmailContact() {
  const handleCopy = () => {
    navigator.clipboard.writeText('josevigodev@gmail.com');
  };

  return (
    <div className='flex-row-container contact-info'>
      <p>josevigodev@gmail.com</p>
      <button onClick={handleCopy}>
        <CopyIcon />
      </button>
      <a href='mailto:josevigodev@gmail.com'>
        <SendIcon />
      </a>
    </div>
  );
}
