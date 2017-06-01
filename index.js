const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./.config');
const profileCtrl = require('./controllers/profile_Ctrl')
const userCtrl = require('./controllers/user_Ctrl')
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json())
var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(session ({
   secret: config.sessionSecret,
   resave: false,
   saveUninitialized: false 
}))
app.use(express.static('public'));

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)



app.listen(3000, function (){
    console.log('listening on port 3000')
})