
import { Route, Routes } from 'react-router-dom';
import CharactersComponent from './components/CharactersComponent/CharactersComponent';
import NavComponent from './components/NavComponent/NavComponent';
import { RMContextProvider } from './context/context';
import { CharactersPage } from './pages/CharactersPage/CharactersPage';


import { HomePage } from './pages/HomePage/HomePage';
import { LocationsPage } from './pages/LocationsPage/LocationsPage';

function App() {
  return (
    <div className="App">
    <div><NavComponent/></div>
    <RMContextProvider>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/characters" element={<CharactersPage/>}></Route>
      <Route exact path='/locations' element={<LocationsPage/>}></Route>
        <Route exact path='/' element = { HomePage}/>
      </Routes>
    </RMContextProvider>
    </div>
  );
}

export default App;
