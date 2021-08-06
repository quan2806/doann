import axios from 'axios';
import * as Config from '../config';

export function ProfileUser(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/getUser?ID=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function CaloNeeded(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/caculateCalo?Id=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function Login(endpoint, method, body) {
  //console.log(axios);
  return axios({
    method: method,
    url: `${Config.API_URL}/checkLogin?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function InsertUser(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/insertUser?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function InsertDiet(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/insertDieInfo?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function Chart(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/barChart?Id=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export default {ProfileUser, CaloNeeded, Login, InsertDiet, Chart};
