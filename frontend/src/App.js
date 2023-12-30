import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainView from './pages/MainView';
import LoginView from './pages/LoginView';
import SignUpView from './pages/SignUpView';
import CurrentProfile from './pages/CurrentProfile';
import CurrentNote from './pages/CurrentNote';
import AddView from './pages/AddView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/signup' element={<SignUpView/>}/>
        <Route path='/profile/current' element={<CurrentProfile/>}/>
        <Route path='/notes/:nid' element={<CurrentNote/>}/>
        <Route path='/notes/addView' element={<AddView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
