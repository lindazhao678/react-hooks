import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseImperativehandle from './components/UseImperativehandle';
import UseContext from './components/UseContext';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

function App() {
  return (
    <div className='App'>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativehandle />
      <UseContext />
      <UseMemo />
      <UseCallback />
    </div>
  );
}

export default App;
