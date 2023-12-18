import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainView from './pages/MainView';
import LoginView from './pages/LoginView';
import SignUpView from './pages/SignUpView';
import Current from './pages/Current';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/signup' element={<SignUpView/>}/>
        <Route path='/profile/current' element={<Current/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
