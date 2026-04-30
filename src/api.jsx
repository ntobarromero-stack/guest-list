const COHORT = "2602-FTB-CT-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}`;

export async function fetchGuests() {
  const response = await fetch(`${API_URL}/guests`);
  const result = await response.json();
  return result.data;
}

export async function fetchGuestById(id) {
  const response = await fetch(`${API_URL}/guests/${id}`); // Added the URL and id
  const result = await response.json();
  return result.data;
}
