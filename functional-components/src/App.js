import { Fragment } from 'react';
import './App.css';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Counter from './components/ClickCounter';
import Accrodion from './components/Accordion';
import Calculator from './components/Calculator';
import ToDoList from './components/ToDoList';

function App() {
  const taskList = ["Clean the room", "Go for a walk", "Cook a dinner"]

  return (
      <div className="m-3">
          <Menu>
              <MenuItem label="Home" name="Nazar"/>
              <MenuItem label="About" name="Steve"/>
              <MenuItem label="Blog" name="Bill"/>
          </Menu>
          <Fragment>
            <Counter />
          </Fragment>
          <Fragment>
                <Accrodion />
          </Fragment>
          <hr />
          <Fragment>
              <Calculator a={25} b={1}/>
          </Fragment>
          <hr />
          <Fragment>
              <ToDoList initialList={taskList} />
          </Fragment>
      </div>
  );
}

export default App;
