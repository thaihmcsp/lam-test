import React from 'react'

function Login(props) {
  function signIn (){
    const username = document.querySelector('#newUsername').value
    const password = document.querySelector('#newPassword').value
    for(let i = 0; i < props.data.length; i++){
      if(username === props.data[i].username){
        if(password === props.data[i].password){
          props.updateUser(props.data[i])
          console.log('thanh cong');
          break
        }else{
          console.log('sai password');
          break
        }
      }else if( i === props.data.length - 1) {
        console.log('sai username');
      }
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="text" name="" id="newUsername" placeholder='username'/>
        <input type="text" id="newPassword" placeholder='password'/>
        <button onClick={signIn}>login</button>
      </div>
    </div>
  )
}

export default Login