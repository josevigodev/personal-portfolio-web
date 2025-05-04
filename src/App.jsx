import { TaskList } from './Components/TaskList';
import { TasksContextProvider } from './Components/TasksContextProvider';
import { TopForm } from './Components/TopForm';
import './styles/App.css';
import './styles/TopForm.css';

export default function App() {
  return (
    <>
      <header>
        <h1>TO-DO APP ✔️</h1>
      </header>
      <main>
        <TasksContextProvider>
          <TopForm />
          <TaskList />
        </TasksContextProvider>
      </main>
    </>
  );
}
