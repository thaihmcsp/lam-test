$('button').on('click', function(){
  const username = $('#username').val()
  const password = $('#password').val()
  
  $.ajax({
    type: 'post',
    url: '/user/create',
    data: {username: username, password: password}
  })
  .then(function(data){
    console.log(11, data);
  })
  .catch(function(err){
    console.log(14, err);
  })
})

for(let i=0; i< 4;i++){
  let buttom = `<button onclick='page(${i+1})'>${i+1}</button>`
  $('body').append(buttom)
}

function page(i){
  window.location.href = '/user/test/'+i
}