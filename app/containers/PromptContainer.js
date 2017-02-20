var React = require('react'),
    Prompt = require('../components/Prompt');

//FUNCTIONAL CONTAINER FOR PROMPT
var PromptContainer = React.createClass({
    contextTypes:{
        router: React.PropTypes.object.isRequired //this will add a router objct in the context object
    },
    
    getInitialState: function(){
        return {
            username:''
        }
    },
    handleUpdateUser: function(e){
        this.setState({
            username: e.target.value
        });
    },

    handleSubmitUser: function(e){
        e.preventDefault();
        var username = this.state.username;
        this.setState({   
            username:''
        });

        //console.log(this.state);
        if(this.props.routeParams.playerOne){ //if player one route
            this.context.router.push({
                pathname:'/battle',
                query:{
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username 
                }
            });
        }else{ //player two route
            this.context.router.push('/playerTwo/'+ this.state.username); 
        }
    },

    render: function(){
        return(
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                username={this.state.username}
                header={this.props.route.header}
            />
        )
    }
});

module.exports = PromptContainer;