import Config from 'react-native-config';

export const WIDTH_CONSTANT_PORTRAIT = 375;
export const HEIGHT_CONSTANT_PORTRAIT = 812;
export const DOMAIN = Config.DOMAIN;
export const BASE_URL = `${DOMAIN}/api/v1`;
export const FIRST_PAGE = 1;
export const PER_PAGE = 10;
export default {
  WIDTH_CONSTANT_PORTRAIT,
  HEIGHT_CONSTANT_PORTRAIT,
  DOMAIN,
  BASE_URL,
  PER_PAGE,
  FIRST_PAGE,
};
