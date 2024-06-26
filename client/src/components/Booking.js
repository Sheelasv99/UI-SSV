const booking=[
    {
        id:1234,
        roomtype:"TQNN"
    },
    {
        id:4567,
        roomtype:"KNGN"
    },
    {
        id:6543,
        roomtype:"SUITE ROOM TQNN"
    }
]
function booking(){
    return(){
        <div>
          <h2>Room Type require</h2>
          <ul>
           { booking.map((booking) =>
            <li key={booking.id}>{booking.roomtype}</li>
              
        )}
          </ul>
        </div>
    }
}