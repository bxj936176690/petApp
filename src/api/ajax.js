import axios from 'axios'

export default async function ajax(url='', type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if(type==='Get'){
      promise = axios.get(url)
    }else {
      promise = axios.post(url)
    }
    promise.then(response => {
              resolve(response.data)
            })
            .catch(err => {
              reject(err)
            })
  })
}
