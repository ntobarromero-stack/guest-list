import { useState, useEffect } from "react";
import { fetchGuests } from "./api";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

function App() {
  const [guests, setGuests] = useState([]);

  const [selectedGuestId, setSelectedGuestId] = useState(null);

  useEffect(() => {
    async function loadGuests() {
      const data = await fetchGuests();
      if (data) {
        setGuests(data);
      }
    }
    loadGuests();
  }, []);

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>Guest List</h1>

      {selectedGuestId ? (
        <GuestDetails
          selectedGuestId={selectedGuestId}
          setSelectedGuestId={setSelectedGuestId}
        />
      ) : (
        <GuestList guests={guests} setSelectedGuestId={setSelectedGuestId} />
      )}
    </div>
  );
}

export default App;
