import logo from './logo.svg';
import './App.css';
import DeveloperList from './components/DeveloperList';
import DeveloperForm from './components/DeveloperForm';
import { useReducer } from 'react';
import reducer from './components/Developer';

function App() {
  


  const [info, dispatch] = useReducer(reducer,[]);
  return (
    <div className="App">
      <h1>powered By Hassan Developeor</h1>

      <DeveloperForm dispatch={dispatch} />

      <DeveloperList info={info} dispatch={dispatch}  />
    </div>
  );
}

export default App;
