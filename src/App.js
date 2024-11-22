import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MovieNavbar from './components/pages/Navbar';
import CinemaApp from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <MovieNavbar/>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<CinemaApp />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
