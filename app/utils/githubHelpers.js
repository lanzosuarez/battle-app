var axios = require('axios');

function getUserInfo(player){
    return axios.get('https://api.github.com/users/'+player);           
} 

function getRepos(username){
    return axios.get('https://api.github.com/users/'+username+'/repos');   
}

function getTotalStars(repos){
    return repos.reduce(function(prev, current){
        return prev+current.stargazers_count
    },0);
}

function getTotalFollowes(players){
    return players.map(function(player){
        return player.followers*3;
    });;
    //[9,0]
}

function calculateScores(totalFollowers, totalStars){
    return totalFollowers.map(function(t){
        return t+totalStars[totalFollowers.indexOf(t)];
    });
}

var helpers = {
    getPlayersInfo: function(players){//players=['pons','alie']
        return axios.all(players.map(function(player){ //takes in an array of promisses
            return getUserInfo(player).catch(function(err){
                return err.response;
            });
        })).then(function(info){ //then when all functions resolves
            return info.map(function(user){ //return a promise
                    return user.data;
            });
        })
    },
    battle: function(players){
        return axios.all(players.map(function(player){
            return getRepos(player.login);
        })).then(function(repos){
            return calculateScores(getTotalFollowes(players),repos.map(function(repos){
                return getTotalStars(repos.data);
            }));
        }).catch(function(err){
            console.warn("error getting repos",err);
        });
    }
}

module.exports = helpers;