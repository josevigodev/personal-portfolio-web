import { useReducer } from 'react';
import { TasksContext } from '../contexts/tasks';
import { initialTasks, taskReducer } from '../reducers/taskReducer';

export function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task) => {
    dispatch({
      type: 'added_task',
      newTask: task,
    });
  };

  const checkTask = (id) => {
    dispatch({
      type: 'checked_task',
      id: id,
    });
  };

  const editTask = (id, task) => {
    dispatch({
      type: 'edited_task',
      id: id,
      newTask: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'deleted_task',
      id: id,
    });
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, checkTask, deleteTask, editTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
