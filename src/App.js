import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Index from './pages/Index';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/jobs' element={<Jobs/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
