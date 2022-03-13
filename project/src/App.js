import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/Menu'
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
