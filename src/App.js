import './App.css';
import '@ionic/react/css/core.css';
import ParticlesComponent from './components/particles';
import { Home }   from './components/Home';
import   Header from './components/Header';
// import Card from './components/Card';
// import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <Header/>
      <Home/>
      {/* <Card width="400px" height="250px"/> */}
      {/* <AllRoutes/> */}
    </div>
  );
}

export default App;