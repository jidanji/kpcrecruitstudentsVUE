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
    if (resultData.responseCode === '00001') {
      resolve(resultData.responseData);
    } else {
      const responseDesc = resultData.responseText ? resultData.responseText : '后台处理数据错误，代码：' + resultData.responseCode;
      const error = new Error(responseDesc)
      reject(error);
    }
  });
}
