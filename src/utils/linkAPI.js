import Axios from 'axios';
import { API_URL } from './environment';

export const login = (data) => {
   return Axios.post(`${API_URL}/auth/login`, data);
};

export const register = (data) => {
   return Axios.post(`${API_URL}/auth/register`, data);
};

export const editUser = (id, data) => {
   return Axios.patch(`${API_URL}/user/${id}`, data);
};

export const showContact = (id) => {
   return Axios.get(`${API_URL}/user/alluser/${id}`);
};

export const topUp = (data) => {
   return Axios.post(`${API_URL}/transaction/topup`, data);
};

export const transfer = (data) => {
   return Axios.post(`${API_URL}/transaction/topup`, data);
};

export const history = (id) => {
   return Axios.get(`${API_URL}/transaction/history/${id}`);
};
