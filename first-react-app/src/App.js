import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

import HelloWorld from './components/HelloWorldJSX';
import Link from './components/Link';
import DateTimeNow from './components/CurrentDateAndTime';


function App() {
  return (
      <div className='m-3'>
        <HelloWorld></HelloWorld>
        <Link link="https://github.com/RudovichNazar23/" text="Visit my github"/>
        <Fragment>
          <DateTimeNow />
        </Fragment>
      </div>
  );
}

export default App;
