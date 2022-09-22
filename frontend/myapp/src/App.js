import './App.css';
import Footer from './components/home/footer';
import HomeBody from './components/home/home_content';
import Navbar from './components/home/navbar';



function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <HomeBody/>
        <Footer/>
    </div>
  );
}

export default App;
