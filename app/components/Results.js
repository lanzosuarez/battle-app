var React = require('react'),
    PropTypes = React.PropTypes,
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var UserDetailWrapper = require('./UserDetailWrapper'),
    UserDetail = require('./UserDetails'),
    MainContainer = require('./MainContainer'),
    Loading = require('./Loading');

var styles = require('../styles');


Results.propTypes={
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

function StartOver(){
    return (
        <div className="col-sm-12" style={styles.space}>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-danger"> RESELECT PLAYERS </button>                
                </Link>
        </div> 
    )
}

function Results(props){
    if(props.isLoading===true){
        return <Loading 
            speed={300}
            text={"Loading"}
        />
    }
    if(props.scores[0]===props.scores[1]){
        return(
            <MainContainer>
                <h1>It's a TIE!</h1>
                <StartOver/>
             </MainContainer>
        )
    }
    return(
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailWrapper header={props.scores[0]>props.scores[1]?"Winner":"Loser"}>
                    <UserDetail 
                        score={props.scores[0]}
                        info={props.playersInfo[0]}
                    />
                </UserDetailWrapper>
                <UserDetailWrapper header={props.scores[1]>props.scores[0]?"Winner":"Loser"}>
                    <UserDetail
                        score={props.scores[1]}
                        info={props.playersInfo[1]}
                    />
                </UserDetailWrapper>
            </div>
            <StartOver/>
        </MainContainer>
    )
}

module.exports = Results;
