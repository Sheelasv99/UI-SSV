const user={
    username:"sheela"
};
const Booking = (props) => {
  return (
    <div>
      <h2>{user.username}'s favourite Room Type</h2>
      <ul>
        {props.bookings.map((booking) => (
          <li key={booking.id}>{booking.roomtype}</li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
