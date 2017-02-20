var React = require('react'),
    Proptypes = React.PropTypes;

var styles = require('../styles/index');

Prompt.propTypes={
    header: Proptypes.string.isRequired,
    onSubmitUser: Proptypes.func.isRequired,
    onUpdateUser: Proptypes.func.isRequired,
    username: Proptypes.string.isRequired
};

function Prompt(props){
    return(
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form className="form-group" onSubmit={props.onSubmitUser}>
                    <div>
                        <input 
                            className="form-control"
                            placeholder="Github Username"
                            type="text"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <br/>
                        <button 
                            className="btn btn-block btn-success"
                            type="submit">  Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

module.exports = Prompt;
