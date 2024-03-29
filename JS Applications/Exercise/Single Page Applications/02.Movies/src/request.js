import { getUserToken } from "./userHelper.js";

async function request(method, url, data) {
  debugger
  const option = {
    method: method,
  };
  const userToken = getUserToken();
  const headers = {
    "Content-Type": "application/json",
  };
  if (userData) {
    headers["X-Authorization"] = userToken;
  }
  option[headers] = headers;

  if (data) {
    option.body = JSON.stringify(data);
  }
  try{
    const response = await fetch(url, option);
    if(response.status === 204){
      return response;
    }
    const responseData = await response.json();
    return responseData;
  }catch(err){
    alert(err);
  }
  

  
}

const get = (url) => {
  debugger
  return request("GET", url);
};
const post = (url, data) => {
  return request("POST", url, data);
};
const update = (url, data) => {
  return request("PUT", url, data);
};
const del = (url) => {
  return request("DELETE", url);
};

export {
  get,
  post,
  update,
  del,
};
