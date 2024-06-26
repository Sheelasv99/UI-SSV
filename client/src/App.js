
import './App.css';
import Bookings from './components/Bookings';
import About from './components/About';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';

const bookings = [
  {
    id: 1234,
    roomtype: "TQNN"
  },
  {
    id: 4567,
    roomtype: "KNGN"
  },
  {
    id: 6543,
    roomtype: "SUITE ROOM TQNN"
  },
];

function App() {
  return (
    <div className="App">
      <h1>Welcome To SS Resorts!!</h1>
      <Homepage/>
      <Login/>
      <Register/>
      <About/>
      
      <Bookings bookings={bookings} />
    </div>
  );
}

export default App;
