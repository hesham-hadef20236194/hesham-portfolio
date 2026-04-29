import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar';
import Banner from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Newsletter } from "./component/Newsletter ";
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
