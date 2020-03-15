import axios from 'axios';

const request = async (url = '', method = 'get', data = {}) => {
  if (method === 'get' && localStorage.getItem(url)) {
    return Promise.resolve(JSON.parse(localStorage.getItem(url)));
  }

  const response = await axios({ url, method, data });
  const stringifiedResponse = JSON.stringify(response);
  localStorage.setItem(url, stringifiedResponse);

  return Promise.resolve(response);
};

export default request;
