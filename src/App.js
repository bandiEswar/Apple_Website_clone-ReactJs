import logo from './logo.svg';
import './App.css';
import Apple from './components/Apple'
import {Routes,Route} from 'react-router-dom'
import Mac from './components/pages/Mac';
import IPhone from './components/pages/IPhone';
import IPad from './components/pages/IPad';
import Watch from './components/pages/Watch';
import Vsion from './components/pages/Vsion';
import Tv from './components/pages/Tv';
import Stores from './components/pages/Stores';
import Navbar from './components/Navbar';
import Accessories from './components/pages/Accessories';
import AirPods from './components/pages/AirPods';
import Support from './components/pages/Support';
import Entertainment from './components/pages/Entertainment';
import Search from './components/pages/Search';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Apple/>} />
        <Route path='/mac' element={<Mac/>} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/iphone' element={<IPhone/>} />
        <Route path='/ipad' element={<IPad/>} />
        <Route path='/watch' element={<Watch/>} />
        <Route path='/vision' element={<Vsion/>} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/airpods' element={<AirPods />} />
        <Route path='/support' element={<Support />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
     
    </div>
  );
}

export default App;
