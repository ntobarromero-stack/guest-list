import { useState, useEffect } from "react";
import { fetchGuestById } from "./api";

export default function GuestDetails({ selectedGuestId, setSelectedGuestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    async function loadSingleGuest() {
      const data = await fetchGuestById(selectedGuestId);
      setGuest(data);
    }
    loadSingleGuest();
  }, [selectedGuestId]);

  if (!guest) {
    return <p>Loading guest details...</p>;
  }

  return (
    <div className="guest-details">
      <h2>Guest Details</h2>

      <div className="details-card">
        <p>
          <strong>Name:</strong> {guest.name}
        </p>
        <p>
          <strong>Email:</strong> {guest.email}
        </p>
        <p>
          <strong>Phone:</strong> {guest.phone}
        </p>
        <p>
          <strong>Job:</strong> {guest.job}
        </p>
        <p>
          <strong>Bio:</strong> {guest.bio}
        </p>
      </div>

      <button onClick={() => setSelectedGuestId(null)}>Back to List</button>
    </div>
  );
}
