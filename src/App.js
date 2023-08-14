import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Showcase from './components/NavShowcase';
import Pricing from './components/NavPricing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/showcase' element={<Showcase />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
https://numis-nexus.vercel.app/
*/
