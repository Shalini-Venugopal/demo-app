import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import Indecision from './Indecision';
import VisibilityToggle from './VisibilityToggle';

function App() {
  return (
    <div className="App">
      <Counter />
      <VisibilityToggle />
      <Indecision />
    </div>
  );
}

export default App;
