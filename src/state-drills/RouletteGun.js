import React from 'react';

class Roulette extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
      };

    constructor(props) {
        super(props)
        this.state = {
          chamber: null,
          spinningTheChamber: false,
        }
      }

      componentWillUnmount() {
        clearTimeout(this.timeout)
      }

      buttonHandler = () => {
        this.setState({
            spinningTheChamber: true,
          })

          this.timeout = setTimeout(() => {
            const randomNum = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomNum,
              spinningTheChamber: false,
            })
          }, 2000)
        } 

    
     renderDisplay() {
         if (this.state.spinningTheChamber === true) {
             return 'spinning the chamber and pulling the trigger!'
         } else if(this.state.chamber !== this.props.bulletInChamber) {
             return 'you\'re safe!'
         } else if(this.state.chamber === this.props.bulletInChamber) {
             return 'BANG!!!'
         }
     }
     

      render() {
        return (
          <div>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.buttonHandler}>Pull the trigger!</button>
          </div>
        )
      }
    }
    


export default Roulette