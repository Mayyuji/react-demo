import React, { Component } from 'react'
import axios from 'axios'
export default class Proxy extends Component {
  componentDidMount() {
    // axios   后端设置 Access-Control-Allow-Orign:* 这个东西，前端就可以跨域
    //   .get(
    //     'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4865231',
    //     {
    //       headers: {
    //         //前端在请求头上面携带数据给后端
    //         'X-Client-Info':
    //           '{"a":"3000","ch":"1002","v":"5.0.4","e":"15984753841366499679797249"}',
    //         'X-Host': 'mall.film-ticket.film.list',
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log('res===>', res)
    //   })
    axios
      .get(
        '/api/ajax/mostExpected?ci=60&limit=10&offset=0&token=&optimus_uuid=A455C0E0F66311EAB68535C86A5B6D1156E0B73EE0934BC586655D13ADC60663&optimus_risk_level=71&optimus_code=10'
      )
      .then((res) => {
        console.log(res)
      })
  }
  render() {
    return <div>网络数据请求</div>
  }
}
