import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Swipe from './react-swipe';

class MyComponent extends Component {
  onSwipeStart() {
    console.log('Start swiping...');
  }

  onSwipeMove(position) {
    console.log(`Moved ${position.x} pixels horizontally`);
    console.log(`Moved ${position.y} pixels vertically`);
  }

  onSwipeEnd() {
    console.log('End swiping...');
  }

  render() {
    const boxStyle = {
      width: '80%',
      margin: '20px auto',
      height: '300px',
      border: '1px solid black',
      background: '#ccc',
      padding: '20px',
      fontSize: '3em'
    };

    return (
      <Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}>
          <div style={boxStyle}>Open the console and swipe me</div>
      </Swipe>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
