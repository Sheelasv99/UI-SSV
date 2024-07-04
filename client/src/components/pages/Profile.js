import React, { useState, useEffect } from 'react';
import { fetchData } from '../../main.js';

const Profile = () => {
  const [user] = useState({ username: 'sheela' });
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ roomtype: '', arrivaldate: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await fetchData(`/user/${user.username}/bookings`, {}, 'GET');
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [user.username]);

  const addBooking = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData(`/user/${user.username}/bookings`, newBooking, 'POST');
      setBookings([...bookings, data]);
      setNewBooking({ roomtype: '', arrivaldate: '' });
      setMessage('Booking added successfully!');
    } catch (error) {
      console.error('Error adding booking:', error);
      setMessage('Failed to add booking. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{user.username}'s Profile</h2>
      <form onSubmit={addBooking} className="mb-3">
        <div className="mb-3">
          <label htmlFor="roomtype" className="form-label">RoomType</label>
          <input
            type="text"
            className="form-control"
            id="roomtype"
            value={newBooking.roomtype}
            onChange={(e) => setNewBooking({ ...newBooking, roomtype: e.target.value })}
            placeholder="Enter roomtype"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="arrivaldate" className="form-label">Arrival Date</label>
          <input
            type="date"
            className="form-control"
            id="arrivaldate"
            value={newBooking.arrivaldate}
            onChange={(e) => setNewBooking({ ...newBooking, arrivaldate: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      {message && <p className="text-center text-success">{message}</p>}
      <h3 className="mt-4">Your reservations</h3>
      <ul className="list-group">
        {bookings.map((booking, index) => (
          <li key={index} className="list-group-item">
            <strong>RoomType:</strong> {booking.roomtype} | <strong>Arrival Date:</strong> {booking.arrivaldate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;