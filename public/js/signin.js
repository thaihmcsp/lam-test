$('button').on('click', function(){
  const username = $('#username').val()
  const password = $('#password').val()
  $.ajax({
    url:'/user/signin',
    type:'POST',
    data: {username:username, password:password}
  })
  .then(function(data){
    if(data.status === 200){
      setCookie('login', data.token, 30)
      window.location.href = '/list'
    }else{
      alert(data.mess)
    }
  })
  .catch(function(err){
    console.log(err);
  })
})

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}