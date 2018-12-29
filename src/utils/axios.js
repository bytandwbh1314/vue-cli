import { DOMAIN } from './config'
import axios from 'axios'

axios.defaults.baseURL = DOMAIN.origin
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let sendData = ''
  for (let item in data) {
    sendData += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
  }
  return sendData
}]
export default {
  axiosP (url, data) {
    data.token = JSON.parse(window.sessionStorage.getItem('token'))
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(
        res => {
          let CODE = res.data.code
          if (CODE === 0) {
            reject(res.data)
          } else if (CODE === 1) {
            resolve(res.data.data)
          } else if (CODE === -1) {
            reject(res.data)
          }
        }
      ).catch(
        err => {
          reject(err)
        }
      )
    })
  },
  axiosG (url, data) {
    data.token = JSON.parse(window.sessionStorage.getItem('token'))
    return new Promise((resolve, reject) => {
      axios.get(url, data).then(
        res => {
          let CODE = res.data.code
          if (CODE === 0) {
            reject(res.data)
          } else if (CODE === 1) {
            resolve(res.data.data)
          } else if (CODE === -1) {
            reject(res.data)
          }
        }
      ).catch(
        err => {
          reject(err)
        }
      )
    })
  }
}
