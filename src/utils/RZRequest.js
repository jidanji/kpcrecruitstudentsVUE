/* eslint-disable */
import axios from 'axios'
let IS_DEBUG = process.env.NODE_ENV === 'development' ? true : false;

export async function request(url, options) {
  try {
    const axiosReponse = await axios(url, options);
    await checkStatus(axiosReponse);
    const retData = await dealResponse(axiosReponse)
    return retData;
  } catch (error) {

    return Promise.reject(new Error(error.toString()));

  }
}


export async function requestWithToken(url, options) {
  try {
    let header = {
      headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem("token")
      }
    };
    Object.assign(options, header);
    options.data.custId = eval('(' + sessionStorage.getItem("UserInfo") + ")").custId;


    options.data.cusNo = eval('(' + sessionStorage.getItem("UserInfo") + ")").custId;

    options.data.custName = eval('(' + sessionStorage.getItem("UserInfo") + ")").custName;





    const axiosReponse = await axios(url, options);
    await checkStatus(axiosReponse);
    const retData = await dealResponse(axiosReponse)
    return retData;
  } catch (error) {

    return Promise.reject(new Error(error.toString()));

  }
}

/**
 * 对请求的返回状态进行处理
 * 
 * @param {Object} response 相应体 
 */
function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if (response.status >= 200 && response.status < 300) {
      resolve(response);
    }
    const error = new Error('请检查网络连接');
    error.response = response;
    reject(error);
  })
}

/**
 * 生产环境下对接口返回的参数进行解密
 * 
 * @param {Object} response 响应体 
 */
function dealResponse(response) {
  return new Promise((resolve, reject) => {
    const resultData = response.data;
    resolve(resultData);
  });
}
