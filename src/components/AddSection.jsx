import { useWindowWidth } from '../hooks/useWindowWidth';
import '../styles/AddSection.css';
import { ToolList } from './ToolList';

// 980

export function AddSection() {
  const width = useWindowWidth();

  if (width < 980) {
    return (
      <div className='add-section'>
        <div className='add'></div>
        <ToolList />
      </div>
    );
  } else {
    return (
      <div className='add-section'>
        <ToolList />
        <div className='add'></div>
      </div>
    );
  }
}
