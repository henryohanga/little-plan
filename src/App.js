import '@popsure/dirty-swan/dist/index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="d-flex App ws8">
      <Header />

      <main className="App-main"></main>

      <Footer />
    </div>
  );
}

export default App;
