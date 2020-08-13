// ajax请求模块
// 返回值：promise返回的是respose.data
import axios from "axios"
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    //执行ajax异步请求
    let promise
    if (type === 'GET') {
      //准备请求参数
      let strData = ""
      Object.keys(data).forEach(key => {
        strData += strData + key + "=" + data[key] + "&"
      })
      if (strData !== '') {
        strData = strData.substring(0, strData.lastIndexOf("&"))
        url = url + "?" + strData
        //url=`${url}?${strData}`
      }
      //发送GET请求
      promise = axios.get(url)
    } else {
      //发送POST请求
      promise = axios.post(url, data)
    }
    promise.then(res => {
      //成功了，调用resolve
      resolve(res.data)
    }).catch(err => {
      //失败了，调用reject
      reject(err)
    })
  })
}