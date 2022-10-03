import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {Box} from "@mui/material";
import{
  SearchFeed, Feed, ChannelDetail, VideoDetail,
} from './components';

import Navbar from './components/Header/header';
import Footer from './components/Footer/footer';

import Home from './pages/Index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
      <Footer/>
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
