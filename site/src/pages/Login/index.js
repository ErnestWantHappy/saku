import { Button } from 'antd'
import {getdata2} from '../../api/api';
import React from 'react';
const test =()=>{
  getdata2().then((res)=>{
    console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
  
  
}
// 未封装的fetch代码
// const test1=()=>{
//     fetch("http://localhost:8000/api/data")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(function(e){
//         console.log('oops! error',e.message);
//     })
// }
const Login = () => (
    <div>
    <Button type="primary" onClick={test}>Button</Button>
</div>
)
export default Login