import { fetchJSON } from './utils';

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;

export async function fetchAll() {
  const { Brastlewark } = await fetchJSON(SERVICE_URL);
  return Brastlewark;
}
