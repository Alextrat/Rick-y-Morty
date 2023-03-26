
import { Route, Routes } from 'react-router-dom';
import CharactersComponent from './components/CharactersComponent/CharactersComponent';
import NavComponent from './components/NavComponent/NavComponent';
import { RMContextProvider } from './context/context';
import { CharactersPage } from './pages/CharactersPage';


import { HomePage } from './pages/HomePage/HomePage';
import { Locations } from './pages/Locations';

function App() {
  return (
    <div className="App">
    <div><NavComponent/></div>
    <RMContextProvider>
    {/* <HomePage/> */}   
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/characters" element={<CharactersComponent/>}></Route>
      <Route exact path='/locations' element={<Locations/>}></Route>
        <Route exact path='/' element = { HomePage}/>
      </Routes>
    </RMContextProvider>
    </div>
  );
}

export default App;
