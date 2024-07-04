
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Bookings from './components/pages/Bookings';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const bookings = [
  
  {
    id: 4567,
    roomtype: "KING ROOM"
  },
  {
    id: 6543,
    roomtype: "TWO QUEEN SUITE ROOM"
  },
];

function App() {
  return (
    <div className="App">
      <h1> Welcome to SS Resorts!!</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
         <Route path="Login" element={<Login/>}/>
         <Route path="Register" element={<Register/>}/>
         <Route path="About" element={ <About/>}/>
         <Route path="bookings" element={<Bookings bookings={bookings} />}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
