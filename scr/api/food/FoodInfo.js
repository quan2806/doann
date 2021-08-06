import axios from 'axios';
import * as Config from '../config';

export function ProfileFood(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/detailFood?IdFood=${endpoint}`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export function AllFood(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/getallFood`,
    data: body,
  }).catch(err => {
    console.log(err);
  });
}

export default {ProfileFood, AllFood};
