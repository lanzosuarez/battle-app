var React = require('react'),
    PropTypes = React.PropTypes;
    ConfirmBattle = require('../components/ConfirmBattle'),
    
    githubHelpers = require('../utils/githubHelpers');

    

var ConfirmBattleContainer = React.createClass({
    contextTypes:{
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){ //1st
        console.log("getInitialState");
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount: function(){//4
        console.log("componentDidMount")
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function(players){
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            }); 
        }.bind(this));// or use es6 arrow function ()=>{}
    },
    handleInitiate: function(){
        this.context.router.push({
            pathname:'/results',
            state:{
                playersInfo: this.state.playersInfo
            }
        });
    },
    render: function(){ //2nd
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiate}
                playersInfo={this.state.playersInfo}
            />
        )
    }

});

module.exports = ConfirmBattleContainer;