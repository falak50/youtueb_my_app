import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Loging from './component/Loging';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
        <h1>App.js</h1>
      <BrowserRouter>
       <NavBar></NavBar>
       <Routes>

         <Route path ="/" element={<Home></Home>}></Route>
   
         
         <Route path="/about" element={<About></About>}></Route>
         <Route path='/user/:name' element={<User></User>}></Route>
         <Route path='/filter' element={<Filter></Filter>}></Route>

         {/* nested Routing start */}
         <Route path='/contact/' element={<Contact></Contact>}>
         <Route path="company" element={<Company></Company>}></Route>
         <Route path="channel" element={<Channel></Channel>}></Route>
         <Route path="other" element={<Other></Other>}></Route>
         </Route>
             {/* nested Routing end */}

         <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
      
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
