import axios from '../../config/axios';
import React from 'react'
import { Link } from 'react-router-dom'


function SignUp() {
  async function signUp (){
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    try {
      const res = await axios.post('/user/create',{username: username, password: password})
      console.log(13, res);
    } catch (error) {
      console.log(error);
    }
  }

  async function test (){
    try {
      console.log(22, new Date());
      const p1 = axios.get('/user/test1')   // đém ngược
      console.log(25, new Date());
      const p2 = axios.get('/user/test2')   // đém ngược
      const data1 = await p1                // lấy data
      const data2 = await p2                // lấy data
      console.log(data2);
      console.log(data1);
      console.log(28, new Date());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <h1>SignUp
      <Link to='/'> Home </Link>
      <input type="text" id='username' placeholder='username'/>
      <input type="text" id='password' placeholder='password'/>
      <button onClick={signUp}>Sign up</button>
      <button onClick={test}>Test</button>

    </h1>
  )
}

export default SignUp