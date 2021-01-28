import '@popsure/dirty-swan/dist/index.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';

import './App.scss';

function App() {
  return (
    <div className="d-flex App ws8">
      <Header />

      <main className="App-main">
        <Landing onGetStarted={() => {}} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
