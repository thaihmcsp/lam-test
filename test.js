const bcrypt = require('bcrypt')

// bcrypt.hash('password', 9)
// .then(function(data){
//   console.log(5, data);
// })
// .catch(function(err){
//   console.log(8, err);
// })

bcrypt.compare('password', '$2b$09$qwjFu/KjhCV1dfjw4Iexru2J1h7ojwrcN3ALPDoYG2mOzxxWl9boK')
.then(function(data){
  console.log(data);
})
.catch(function(err){
  console.log(err);
})