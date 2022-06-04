import logo from './logo.svg';
import './App.css';
import {Routers} from './Routers/Routers';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((store)=>{return store.theme});

  return (
    <div className={theme ? "App" : "Dark"}>
      <Routers/>
    </div>
  );
}

export default App;
