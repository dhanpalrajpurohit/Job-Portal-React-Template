import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Box} from "@mui/material";

import {Login, Signup, ResetPassword, Profile, ForgetPassword} from './pages/userAccount/index';
import {Home, Blog, Contact, Jobs} from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Box>
      {/* <Navbar/> */}
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/job' element={<Jobs/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/resetpassword' element={<ResetPassword />}/>
          <Route path='/forgetpassword' element={<ForgetPassword />}/>
      </Routes>
      {/* <Footer/> */}
      </Box>
      </BrowserRouter>
    </div>  
  );
}

export default App;
