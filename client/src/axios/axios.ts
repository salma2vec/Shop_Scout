export const createAxiosConfig = (method, headers, url, data) => {
  return {
    method,
    headers,
    url,
    data,
  };
};