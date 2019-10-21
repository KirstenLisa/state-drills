import React from 'react';

class HelloWorld extends React.Component {

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
          who: 'who'
        }
      }
      handleButtonClickWorld = () => {
        this.setState({
          who: 'World'
        })
      }

      handleButtonClickFriend = () => {
        this.setState({
          who: 'Friend'
        })
      }

      handleButtonClickReact = () => {
        this.setState({
          who: 'React'
        })
      }

    render() {
        return (
          <div>
            <p>Hello {this.state.who}</p>
            <button onClick={this.handleButtonClickWorld}>
                World
            </button>
            <button onClick={this.handleButtonClickFriend}>
                Friend
            </button>
            <button onClick={this.handleButtonClickReact}>
                React
            </button>
          </div>
        )
      }
    }


    export default HelloWorld