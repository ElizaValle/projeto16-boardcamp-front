import api from './api';

export function list (customerId, gameId) {
  const query = {};

  if (customerId) query.customerId = customerId;
  if (gameId) query.gameId = gameId;

  return api.get(`${process.env.REACT_APP_API_URL}/rentals`, null, query);
}

export function rent (customerId, gameId, daysRented) {
  return api.post(`${process.env.REACT_APP_API_URL}/rentals`, {
    customerId,
    gameId,
    daysRented
  });
}

export function returnRental (rentalId) {
  return api.post(`${process.env.REACT_APP_API_URL}/rentals/${rentalId}/return`);
}

export function destroy (rentalId) {
  return api.delete(`${process.env.REACT_APP_API_URL}/rentals/${rentalId}`);
}
