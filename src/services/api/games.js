import api from "./api";

export function list() {
  return api.get(`${process.env.REACT_APP_API_URL}/games`);
}

export function create(name, image, stockTotal, pricePerDay) {
  return api.post(`${process.env.REACT_APP_API_URL}/games`, {
    name,
    image,
    stockTotal,
    pricePerDay,
  });
}
