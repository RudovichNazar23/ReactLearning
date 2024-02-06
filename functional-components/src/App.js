import { Fragment, useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTask] = useState([]);
  const [showTasks, setShowTasks] = useState(true);

  const addTaskHandler = (newTask) => {
      setTask((oldItems) => oldItems.concat([newTask]));
      setShowTasks(true);
  };

  const deleteTask = (event, taskTitle) => {
    event.preventDefault();
    setTask((oldTasks) => oldTasks.filter((task) => task.title !== taskTitle))
  }


  return (
    <div className="m-3 d-flex flex-column">
        <div className='m-auto'>
          <button className='btn btn-light border m-1' onClick={() => setShowTasks(true)}>
            Show tasks
          </button>
          <button className='btn btn-success m-1' onClick={() => setShowTasks(false)}>
            Add new task
          </button>
        </div>
        <hr className='container' />
        <div className='d-flex flex-column'>
        {
          showTasks ? <TaskList items={tasks} deleteHandler={deleteTask} /> : <AddTaskForm handler={addTaskHandler} />
        }
        </div>
    </div>
  );
}

export default App;
