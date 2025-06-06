import Home from './component/Home/Home'
import Layout from './component/Layout/Layout';
import Contact from './component/Contact/Contact';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './component/About/About';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route  path='contact' element={<Contact/>}/>
    </Route>
  
   </Routes>
  );
}

export default App;
