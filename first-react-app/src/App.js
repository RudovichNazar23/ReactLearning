import logo from './logo.svg';
import './App.css';
import { Fragment, Component } from 'react';

import HelloWorld from './components/HelloWorldJSX';
import Link from './components/Link';
import DateTimeNow from './components/CurrentDateAndTime';
import SelectList from './components/List';
import Breeds from './components/Breeds';
import StyledFullName from './components/StyleAttributes';

class App extends Component {
  getListOfBreeds() {
    const breeds = [
      {breed: "Corgi", description: "Cute breed of dog."},
      {breed: "Chihuahua", description: "Small breed of dog."},
      {breed: "SnoopDog", description: "Just a good dog"},
    ];

    return breeds;
  }

  render() {
    return (
        <div className='m-3'>
          <HelloWorld></HelloWorld>
          <Link link="https://github.com/RudovichNazar23/" text="Visit my github"/>
          <Fragment>
            <DateTimeNow />
            <SelectList items={["javascript", "python", "django", "react", "html", "css"]}/>
            <Breeds list={this.getListOfBreeds()} className={["mt-3"]}/>
          </Fragment>
          <Fragment>
            <StyledFullName name={"Nazar"} surname={"Rudovich"}></StyledFullName>
          </Fragment>
        </div>
    );
  }
}

export default App;
