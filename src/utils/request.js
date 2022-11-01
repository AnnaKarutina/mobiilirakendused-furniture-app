import axios from 'axios';

export const request = ({ url, method, data }) => {
  return axios({
    method: method || 'get',
    url: `http://listicle.deegeehub.com/api${url}`,
    data,
  });
}
