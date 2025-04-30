import { AddSection } from './AddSection';
import { FormSection } from './FormSection';
import '../styles/MainContent.css';

export function MainContent() {
  return (
    <main>
      <div className='first-section'>
        <FormSection />
        <AddSection />
      </div>
      <div className='second-section'></div>
    </main>
  );
}
