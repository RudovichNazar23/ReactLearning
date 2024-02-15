import './App.css';
import DashBoard from './components/DashBoard';

function App() {
  const name = "Nazar"

  return (
      <div className="">
          <DashBoard name={name}  />
      </div>
  );
}

export default App;
