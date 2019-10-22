import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion.js';

const sectionsProps = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return <div>
      <Accordion sections={sectionsProps} />
    </div>
  }
}

export default App;