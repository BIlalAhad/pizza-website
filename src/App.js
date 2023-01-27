
import './App.css';
import Header from './Components/Header';
import Index from './Components/Index';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import{BrowserRouter as Router, Route , Routes}from 'react-router-dom'

function App() {
  return (

      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Index />}  />
          <Route path='/About' element={<About />}  />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>


  );
}

export default App;
