import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
    
class Facebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: ''
        };
    }

    componentClicked = () => console.log("CLICK FB BUTTON");

    responseFacebook = response => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style = {{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <CardImg top width="100%" src={this.state.picture} alt={this.state.name} />
                    <CardBody>
                        <CardTitle>{this.state.name}</CardTitle>
                        <CardSubtitle>{this.state.email}</CardSubtitle>
                        <CardText><b>User ID</b>: {this.state.userID}</CardText>
                    </CardBody>
                </div>
            );
        }else{
            fbContent = ( <div>
            
                            <FacebookLogin
                                appId= {this.props.clientId}
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.componentClicked}
                                callback={this.responseFacebook} /> 
                            </div>)
        }
        return (
            <div>
                {fbContent}
                
            </div>
        );
    }
}

Facebook.propTypes = {};

export default Facebook;
