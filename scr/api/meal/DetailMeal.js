import axios from 'axios';
import * as Config from '../config';

export function DetailMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/detailMeal?IdMeal=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function FoodInMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/detailFoodMeal?IdB=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function AllMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/getAllMeal?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function InsertDM(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/insertDetailMeal?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function UpdateDetailMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/updateDetailMeal?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function DeleteDetailMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/delDetailMeal?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function InsertDMNew(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/insertMealDM?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}
export default {
  FoodInMeal,
  DetailMeal,
  InsertDM,
  AllMeal,
  UpdateDetailMeal,
  InsertDMNew,
};
