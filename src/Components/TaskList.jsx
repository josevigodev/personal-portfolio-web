import { useContext } from 'react';
import '../styles/TaskList.css';
import { Task } from './Task';
import { TasksContext } from '../contexts/tasks';

export function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <section className='section-tasks'>
      {tasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
    </section>
  );
}
