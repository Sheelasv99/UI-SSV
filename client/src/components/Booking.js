const user ={
     id:2345,
     username : "sheela"
}

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
    },
]
const Booking=() =>{
    return {
       <div>
          <h2>{user.username}'s favourite room </h2>
       </div>

         
     
    };
}
export default Booking;