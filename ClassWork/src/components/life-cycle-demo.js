import React from "react"

class SuccessfulLogin extends React.Component {
    componentDidMount() {
        alert('SuccessfulLogin Component is Mounted')
    }
    componentWillUnmount() {
        alert("successfulLogin Component will Unmount")
    }
    
    render() {
        return (
            <div>
                <h2>Login Successful</h2>
            </div>
        )
    }    
}

class ErrorLogin extends React.Component {
    componentDidMount() {
        alert('ErrorLogin Component is Mounted')
    }
    componentWillUnmount() {
        alert("ErrorLogin Component will Unmount")
    }

    render() {
        return (
            <div>
                <h2 className="text-danger">Login FAiled</h2>
            </div>
        )
    }
}

 export class LifeCycleDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            UserDetails: {
                UserName: 'Siva_Jallipalli',
                PWD: 'Siva@11' 
            },
            FormDetails: {
                UserName: 'Siva_Jallipalli',
                PWD: 'Siva@11' 
            },
            result : ''
        }

        this.HandleLogin = this.HandleLogin.bind(this)
        this.HandlePassword = this.HandlePassword.bind(this)
        this.HandleUserName = this.HandleUserName.bind(this)
    }

    HandleUserName (e) {
        this.setState({
            FormDetails: {
                UserName: e.target.value,
                PWD: this.state.FormDetails.PWD
            }
        })
    }
    HandlePassword (e) {
        this.setState({
            FormDetails: {
                UserName: this.state.FormDetails.UserName,
                PWD: e.target.value,
            }
        })
    }
    HandleLogin() {
        if (this.state.UserDetails.UserName == this.state.FormDetails.UserName && 
            this.state.UserDetails.PWD == this.state.FormDetails.PWD) {
                this.setState({
                    result: <SuccessfulLogin/>
                })
            }
        else {
            this.setState({
                result: <ErrorLogin/>
            })
        }
    }

    render () {
        return (
            <div className="container">
                <h2>Login Page</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={this.HandleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={this.HandlePassword} /></dd>
                </dl>
                <button onClick={this.HandleLogin} >Login</button>
                <h2>{this.state.result}</h2>
            </div>
        )
    }
}