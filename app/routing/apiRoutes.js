var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var userInput = req.body;

        for(var i = 0; i < userInput.scores.length; i ++) {
            userInput.scores[i] = parseInt(userInput.scores[i]);
        }
        
        var bestFriend = 0;
        var minimumDiff = 40;
        
        for(var i = 0; i < friends.length; i++) {

            var totalDiff = 0;

            for(var j = 0; j < friends[i].scores.length; j++) {

                var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
                totalDiff += difference;
            } if (totalDiff < minimumDiff) {
                bestFriend = i;
                minimumDiff = totalDiff;
            }
        }
        
        friends.push(userInput);
        
        res.json(friends[bestFriend]);
    })
}