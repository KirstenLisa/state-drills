import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
      }

      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.interval)
      }

      displayCountdown() {
        if (this.state.count >= 8) {
           return 'BOOM!';
            
        } else if (this.state.count % 2 == 0) {
            return 'tock';
          
          } else {
              return 'tick';
          }

      }

      render() {
        return (
          <div>
            {this.displayCountdown()}   
          </div>
        )
      }
    }
    


export default Bomb