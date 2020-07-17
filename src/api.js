import queryString from 'query-string';

export const API_URL = 'https://swapi.dev/api';

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    let queryForLink = queryString.stringify(
      { ...params },
      { arrayFormat: 'comma' }
    );

    return fetchApi(`${API_URL}${url}?${queryForLink}`);
  }
}
