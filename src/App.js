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
import Login from './pages/userAccount/Login';
import Signup from './pages/userAccount/Signup';
import ForgetPassword from './pages/userAccount/ForgetPassword';
import ResetPassword from './pages/userAccount/ResetPassword';
import UserProfile from './pages/userAccount/Profile';

import Home from './pages/Index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Box>
      {/* <Navbar/> */}
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/resetpassword' element={<ResetPassword/>} />
          <Route path='/userprofile' element={<UserProfile />}/>
      </Routes>
      {/* <Footer/> */}
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
