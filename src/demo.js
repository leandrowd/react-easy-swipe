import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swipe from './react-swipe';

/* eslint no-console: 0*/
class MyComponent extends Component {
  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${ position.x } pixels horizontally`, event);
    console.log(`Moved ${ position.y } pixels vertically`, event);
  }

  onSwipeEnd(event) {
    console.log('End swiping...', event);
  }

  render() {
    const boxStyle = {
      width: '100%',
      margin: '20px auto',
      height: '300px',
      border: '1px solid black',
      background: '#ccc',
      padding: '20px',
      fontSize: '3em'
    };

    return (
      <Swipe
        onSwipeStart={ this.onSwipeStart }
        onSwipeMove={ this.onSwipeMove }
        onSwipeEnd={ this.onSwipeEnd }
      >
          <div style={ boxStyle }>Open the console and swipe me</div>
      </Swipe>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
