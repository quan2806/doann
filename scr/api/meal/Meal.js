import axios from 'axios';
import * as Config from '../config';

export function InsertMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/insertMeal?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function CaloAllMeal(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/getCaloPerDay?${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}
export default {InsertMeal, CaloAllMeal};
