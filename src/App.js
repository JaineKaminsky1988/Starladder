import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Events from './components/Events';
import Stages from './components/Stages';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Events></Events>
      <Stages></Stages>
    </div>
  );
}

export default App;
