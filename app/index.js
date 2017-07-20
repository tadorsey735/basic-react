import React from 'react';
import { render } from 'react-dom';

var Input = React.createClass({
  getInitialState: function () {
    return {
      userInput: ''
    };
  },
 
  handleUserInput: function(e) {
    this.setState({
      userInput: e.target.value
    });
  },
  
  render: function () {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.userInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
});

const node = document.getElementById('app');
render( <Input />, node );