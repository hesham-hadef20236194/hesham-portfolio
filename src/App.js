import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar';
import Banner from './component/Banner';
import { Skills } from './component/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;
