import { Item } from "../types/Item";

const BASE_URL = 'https://wine-shop-backend-production.up.railway.app/';
const DATABASE_ENDPOINT = 'wines';

function handleErrors(response: any) {
  console.log(response);
  if (!response.ok) {
    return Promise.reject(
      new Error(`${response.status} - ${response.statusText}`)
    );
  }

  if (!response?.headers?.get('content-type')?.includes('application/json')) {
    return Promise.reject(
      new Error('Content type is not supported')
    )
  };

  return response;
};

function request<T>(url: string): Promise<any> {
  // const params = {
  //   "additionalProp1": "str",
  //   "additionalProp2": "str",
  //   "additionalProp3": "str",
  // }
  const options: RequestInit = {
    method: 'GET',
  }
  // const addUrl = '?' + (new URLSearchParams(params)).toString();
  return fetch(BASE_URL + url, options)
  .then(response => {
      console.log('test');
      return handleErrors(response).json();
      // return response.json();
    })
};

export const fetchClient = {
  getDatabase: () => request<Item[]>(DATABASE_ENDPOINT),
}