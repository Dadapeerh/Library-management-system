import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AdminHome from './components/adminhome';
import AdminLogin from './components/adminLogin';

import LandingPage from './components/landingPage';
import UserHome from './components/userhome';
import UserLogin from './components/userLogin';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/> 
        <Route path='/user/*' element={<UserHome/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
