import fetch from 'isomorphic-fetch';
import URLSearchParams from 'url-search-params';

export const fetchBy = async (query, options = {}) => {
  return fetch(query, options)
    .then(res => {
      return res.ok ? res.json() : res.status;
    }).catch((e) => {
      console.error(e);
    });
};

export const createURLSearchParams = (data) => {
  const params = new URLSearchParams();

  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
};
