import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home'
import AthleteDetails from './screens/AthleteDetails';
import NewAthlete from './screens/NewAthlete';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className='container'> 
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/new' element={<NewAthlete />} />
          <Route path='/details/:id' element={<AthleteDetails />} /> 
        </Routes>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
