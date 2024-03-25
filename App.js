import './App.css';
import FirstApi from './CustHook/FirstApi';
import MainProps from './PropsDrilling/MainProps';
import MainContext from './UseContext/MainContext';
import Memo from './UseMemo/Memo';
import Memo2 from './UseMemo/Memo2';

function App() {
  return (
    <div className="App">
      <FirstApi />
      <MainProps />
      <MainContext />
      <Memo />
      <Memo2 />
    </div>
  );
}

export default App;
