import './App.css';
import Menu from './components/Menu'
import Slider from './components/Slider';
import Classes from './components/Classes';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />  
      <Slider/>
      <Classes/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
