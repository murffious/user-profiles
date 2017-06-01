const users =
 [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

exports.login = function (req, res, next) {
  for (let i = 0; i < users.length; i++) {
        if (req.body.name === users[i].name  && req.body.password === users[i].password) {
          req.session.currentUser = users[i]
        return   res.send({ userFound: true });
    } 
   
      
    
  }
   return  res.send({ userFound: false });
}


// exports.login = function(req, res, next){
//     // const { name, password } = req.body
//     const loginUser = req.body;

//    for(let i = 0; i < users.length; i++){
//     if(loginUser.name === users[i].name && loginUser.password === users[i].password){
//             req.session.currentUser= users[i]
//             return res.send({ userFound: true });
//         }
//     }
//      return res.send({ userFound: false });
// }