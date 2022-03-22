async function render(page){
  $('.list').html('')
  try {
    const data = await $.ajax({
      type:'GET',
      url:`/user/list?page=${page}&view=2`
    })
    data.map(function(ele, index){
      let tr = `
      <tr>
        <td> ${ele.username} </td>
        <td> ${ele.password} </td>
      </tr>
      `
      $('.list').append(tr)
    })
  } catch (error) {
    console.log(error);
  }
}

render(1)

$.ajax({
  type:'GET',
  url:'/user/list'
})
.then(function(data){
  let totalPage = Math.ceil(data.length/2)
  for(let i = 1; i<= totalPage; i++){
    let button = `
    <button onclick='changePage(${i})'>${i}</button>
    `
    $('.listButton').append(button)
  }
}).catch(function(err){
  console.log(7,err);
})

function changePage (page){
  render(page)
}

async function logout (){
  try {
    await $.ajax({
      url:'/user/logout',
      type:'POST'
    })
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/signin'
  } catch (error) {
    console.log(error);
  }
}