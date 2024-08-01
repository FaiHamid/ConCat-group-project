const BASE_URL = '/api/';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string): Promise<T> {

  return wait(500)
    .then(() => fetch(BASE_URL + url))
    .then(response => response.json());
}

function quickRequest<T>(url: string): Promise<T> {

  return ( fetch(BASE_URL + url)
    .then(response => response.json()));
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  getQuick: <T>(url: string) => quickRequest<T>(url),
};