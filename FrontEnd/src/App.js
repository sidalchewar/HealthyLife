import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout'
import LogInHome from './Pages/UserHome/LogInHome';
import Register from './Pages/Register';
import LogInLayout from './Pages/UserHome/LogInLayout';
import Profile from './Pages/UserHome/Profile';
import LatestNews from './Pages/UserHome/LatestNews';
import DiseasePrevent from './Pages/UserHome/DiseasePrevent';

function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Layout/>}>
    <Route index  element={<HomePage/>}/>
    <Route path="/registration" element={<Register/>}/>
   </Route>
    <Route path='/login' element={<LogInLayout/>}>
     <Route index element={<LogInHome/>}></Route>
     <Route path='/login/profile' element={<Profile/>}/>
     <Route path='/login/latestnews' element={<LatestNews/>}/>
    <Route path="/login/disease" element={<DiseasePrevent/>}/>
    </Route>
   </Routes>
   </>
  );
}

export default App;
