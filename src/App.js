import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />

    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
