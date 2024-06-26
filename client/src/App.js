
import './App.css';
import Bookings from './components/Bookings';


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
      <h1>Welcome To SS Resorts Booking!!</h1>
      <Bookings bookings={bookings} />
    </div>
  );
}

export default App;
