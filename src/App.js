import './App.css';
import Data from './components/Data';
import Error from './components/Error'; 
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Data opts={'data'} />
      <Error opts={'error'} />
      <Loading opts={'loading'} />
    </div>
  );
}

export default App;
