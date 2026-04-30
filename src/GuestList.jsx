export default function GuestList({ guests, setSelectedGuestId }) {
  if (!guests || guests.length === 0) {
    return <p>Loading guests...</p>;
  }

  return (
    <div className="guest-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              onClick={() => setSelectedGuestId(guest.id)}
              className="guest-row"
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
        Select a guest to see more details.
      </p>
    </div>
  );
}
