import './App.css';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

function App() {
  return (
      <div className="m-3">
          <Menu>
              <MenuItem label="Home" name="Nazar"/>
              <MenuItem label="About" name="Steve"/>
              <MenuItem label="Blog" name="Bill"/>
          </Menu>
      </div>
  );
}

export default App;
