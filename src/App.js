import Layout from './component/Layout/Layout';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>} ></Route>
   </Routes>
  );
}

export default App;
