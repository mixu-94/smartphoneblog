
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Ranking from './components/Ranking/Ranking';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>

      <Ranking/>
      <Footer/>
      
    </div>
  );
}

export default App;
