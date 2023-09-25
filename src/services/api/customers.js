import api from './api';

export function list () {
  return api.get(`${process.env.REACT_APP_API_URL}/customers`);
}

export function getById (customerId) {
  return api.get(`${process.env.REACT_APP_API_URL}/customers/${customerId}`);
}

export function updateCustomer (customerId, name, phone, cpf, birthday) {
  return api.put(`${process.env.REACT_APP_API_URL}/customers/${customerId}`, {
    name,
    phone,
    cpf,
    birthday
  });
}

export function create (name, phone, cpf, birthday) {
  return api.post(`${process.env.REACT_APP_API_URL}/customers`, {
    name,
    phone,
    cpf,
    birthday
  });
}
