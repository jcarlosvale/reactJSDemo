import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../api/todo/HelloWorldService.js'


class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage : ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos"> here </Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success"> Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
            
    }

    retrieveWelcomeMessage() {
        // HelloWorldService
        //     .executeHelloWorldService()
        //     .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService
        .executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))

        
        // HelloWorldService
        // .executeHelloWorldErrorService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(error => this.handleError(error))

    }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage : response.data})
    }

    handleError(error) {
        // console.log("error call")
        // console.log(error.response)
        // console.log(error.response.data.message)
        let errorMessage = ' '
        if (error.message) {
            errorMessage += error.message
        }
        if (error.response && error.response.data) {
            errorMessage += error.response.data
        }
        this.setState({welcomeMessage : errorMessage})
        //this.setState({welcomeMessage : response.data})
    }
}

export default WelcomeComponent
