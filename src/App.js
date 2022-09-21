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
  SearchFeed, Feed, ChannelDetail, VideoDetails, Navbar,
} from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetails/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
