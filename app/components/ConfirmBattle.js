var React = require('react'),
    PropTypes = React.PropTypes,
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var UserDetailWrapper = require('./UserDetailWrapper'),
    UserDetail = require('./UserDetails'),
    MainContainer = require('./MainContainer'),
    Loading = require('./Loading');

var styles = require('../styles');

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired
}

function puke(object){
    return JSON.stringify(object, null, '\t');
}

function ConfirmBattle(props){
    console.log(props)
    return props.isLoading === true
            ? <Loading 
                    speed={300}
                    text={"Loading"}
                />
            : 
            <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailWrapper header={'Player One'}>
                        <UserDetail info={props.playersInfo[0]}/>
                    </UserDetailWrapper>
                    <UserDetailWrapper header={'Player Two'}>
                        <UserDetail 
                            info={props.playersInfo[1]} 
                             playerNo={2}/>
                    </UserDetailWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="cols-sm-12" style={styles.space}>
                        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}> INITIATE </button>                   
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="/playerOne">
                            <button type="button" className="btn btn-lg btn-danger"> RESELECT PLAYERS </button>                
                        </Link>
                    </div>    
                </div>   
            </MainContainer>
}

module.exports = ConfirmBattle;