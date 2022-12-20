import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingBanner from './components/landingBanner/landingBanner';
import Content from './components/content/content';
// import Content from './components/content/content';

function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<LandingBanner/>}/>
    <Route path='/content' element={<Content/>}/>
  </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
