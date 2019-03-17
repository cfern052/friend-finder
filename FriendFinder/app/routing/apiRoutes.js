var friendList = require('../data/friend.js');

app.get('/api/friends', function(req,res){
    res.json(friendList);
});