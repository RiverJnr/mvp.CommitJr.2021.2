import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Destaques from './components/destaques';
import Lancamentos from './components/lancamentos';

function App() {
  return (
    <div className="App">
     <Header />
     <Lancamentos />
     <Destaques />
     <Footer />
    </div>
  );
}

export default App;
