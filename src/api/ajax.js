/*
ajax请求模块
返回值： promise对象(异步返回的数据是： respones.data)
*/
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    // 执行异步ajax请求
    if (type === 'GET') {
      // 准备一个url query参数数据
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (respones) {
      // 成功调用 resolve
      resolve(respones.data)
    }).catch(function (error) {
      // 失败调用 reject
      reject(error)
    })
  })
}
