import React from "react";

class Accordion extends React.Component {

  static defaultProps = { sections: [] };

  state = {
      currentIndex: null
    };

    handleButtonClick(index) {
      console.log('button clicked!', { index })
      this.setState({ currentIndex: index })
    }



    renderItem(section, index, currentIndex) {
      return (
        <li className='Accordion__item' key={index}>
          <button
            type='button'
            onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          {(currentIndex === index) && <p>{section.content}</p>}
        </li>
      )
    }

    render() {
      return (
        <ul className='Accordion'>
          {this.props.sections.map((section, index) =>
            this.renderItem(section, index, this.state.currentIndex)
          )}
        </ul>
      )
  }
}

export default Accordion;

