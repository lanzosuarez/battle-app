var React = require('react'),
    githubHelpers = require('../utils/githubHelpers');

var Results = require('../components/Results');

var ResultContainer = React.createClass({

    getInitialState: function(){
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function(){ 
        githubHelpers.battle(this.props.location.state.playersInfo)
        .then(function(scores){
            console.log(scores)
            this.setState({
                isLoading: false,
                scores: scores
            });
        }.bind(this));

    },
    render: function(){
        return(
            <Results 
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores}
            />
        )
    }
});

module.exports = ResultContainer;