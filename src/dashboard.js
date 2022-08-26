import './scss/dashboard.scss';
import axios from 'axios';
import { api_path, token } from './methods'

// 取得訂單列表
function getOrderList() {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`,
    {
      headers: {
        'Authorization': token
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
}
document.getElementById('getOrderList').addEventListener('click', getOrderList)