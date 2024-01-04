import { Fragment } from 'react';
import './App.css';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Counter from './components/ClickCounter';
import Accrodion from './components/Accordion';
import Calculator from './components/Calculator';
import ToDoApplication from './components/ToDoList';
import RemoteDropDown from './components/RemoteDropDown';
import Clicker from './components/Clicker';
import StopWatch from './components/StopWatch';
import ResizeWindow from './components/ResizeWindow';

function App() {
  const taskList = [
    {task: "1", done: false, index: 0},
    {task: "2", done: false, index: 1},
    {task: "3", done: false, index: 2},
    {task: "4", done: false, index: 3},
  ]

  return (
      <div className="m-3">
          {/* <Menu>
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
            <ToDoApplication initialList={taskList}/>
          </Fragment>
          <hr />
          <Fragment>
              <RemoteDropDown />
          </Fragment> */}
          {/* <Clicker /> */}
          {/* <StopWatch /> */}
          <ResizeWindow />
      </div>
  );
}

export default App;
