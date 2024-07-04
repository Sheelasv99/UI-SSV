const user={
    username:"Sheela"
};
const Booking = (props) => {
  return (
    <div>
      <h1>{user.username}'s Favourite RoomType</h1>
      <ul>
        {props.bookings.map((booking) => (
          <li key={booking.id}>{booking.roomtype}</li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
