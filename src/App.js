import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import './App.scss'
import { Watch } from '../src/pages/watch/Watch'
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Home></Home>
      {/* <Watch></Watch> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
