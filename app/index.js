var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


ReactDOM.render(
    routes,
    document.getElementById('app')
)


//  USER_DATA = {
// //     name: 'Pons',
// //     username: 'PonsSuarez',
// //     imageUrl: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
// // 
// // var HelloWorld = React.createClass({ //will create a brand new react component
// //     render: function(){
// //         console.log(this.props)
// //         return (
// //             <div> Hello {this.props.user.name}
// //             <Avatar user={USER_DATA} />
// //             </div>
// //         )   
// //     }
// // });

// // var ProfilePic = React.createClass({
// //     render: function(){
// //         return <img src={this.props.imageUrl} alt="" style={{height:100, width:100}} />
// //     }
// // });

// // var ProfileLink = React.createClass({
// //     render: function(){
// //         return (
// //             <div>
// //                 <a href="https://google.com"> Go to Google!</a>
// //             </div>
// //         )
// //     }
// // });

// // var ProfileName = React.createClass({
// //     render: function(){
// //         return <div>{this.props.name}</div>
// //     }
// // })

// // var Avatar = React.createClass({
// //     render: function(){
// //         return(
// //             <div>
// //                 <ProfilePic imageUrl={this.props.user.imageUrl} />
// //                 <ProfileName name={this.props.user.name}/>
// //                 <ProfileLink  />
// //             </div>
// //         )
// //     }
// // })

