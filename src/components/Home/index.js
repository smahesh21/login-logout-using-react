import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isClicked: false}
  isLoginOrLogout = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }
  render() {
    const {isClicked} = this.state
    let greeting = null
    let logInOutButtons = null
    if (isClicked) {
      greeting = <h1 className="heading">Welcome User</h1>
      logInOutButtons = (
        <button className="log-in-out-button" onClick={this.isLoginOrLogout}>
          Logout
        </button>
      )
    } else {
      greeting = <h1 className="heading">Please Login</h1>
      logInOutButtons = (
        <button className="log-in-out-button" onClick={this.isLoginOrLogout}>
          Login
        </button>
      )
    }
    return (
      <div className="bg-container">
        <div className="home-container">
          {greeting}
          {logInOutButtons}
        </div>
      </div>
    )
  }
}
export default Home
