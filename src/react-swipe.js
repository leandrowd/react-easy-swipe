import React, { Component, PropTypes } from 'react';

class ReactSwipe extends Component {
  static propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
    onSwipeLeft: PropTypes.func,
    onSwipeRight: PropTypes.func,
    onSwipeStart: PropTypes.func,
    onSwipeMove: PropTypes.func,
    onSwipeEnd: PropTypes.func
  }

  static defaultProps = {
    tagName: 'div',
    onSwipeUp() {},
    onSwipeDown() {},
    onSwipeLeft() {},
    onSwipeRight() {},
    onSwipeStart() {},
    onSwipeMove() {},
    onSwipeEnd() {}
  }

  constructor() {
    super();
    this._handleSwipeStart = this._handleSwipeStart.bind(this);
    this._handleSwipeMove = this._handleSwipeMove.bind(this);
    this._handleSwipeEnd = this._handleSwipeEnd.bind(this);
  }

  _handleSwipeStart(event) {
    const { pageX, pageY } = event.touches[0];
    this.touchStart = { pageX, pageY };
    this.props.onSwipeStart(event);
  }

  _handleSwipeMove(event) {
    const deltaX = event.touches[0].pageX - this.touchStart.pageX;
    const deltaY = event.touches[0].pageY - this.touchStart.pageY;
    this.swiping = true;

    // handling the responsability of cancelling the scroll to
    // the component handling the event
    const shouldPreventDefault = this.props.onSwipeMove({
      x: deltaX,
      y: deltaY
    }, event);

    if (shouldPreventDefault) {
      event.preventDefault();
    }

    this.touchPosition = { deltaX, deltaY };
  }

  _handleSwipeEnd(event) {
    if (this.swiping) {
      if (this.touchPosition.deltaX < 0) {
        this.props.onSwipeLeft(1, event);
      } else if (this.touchPosition.deltaX > 0) {
        this.props.onSwipeRight(1, event);
      }
      if (this.touchPosition.deltaY < 0) {
        this.props.onSwipeUp(1, event);
      } else if (this.touchPosition.deltaY > 0) {
        this.props.onSwipeDown(1, event);
      }
    }
    this.props.onSwipeEnd(event);
    this.touchStart = null;
    this.swiping = false;
    this.touchPosition = null;
  }

  render() {
    return (
      <this.props.tagName
        onTouchMove = { this._handleSwipeMove }
        onTouchStart = { this._handleSwipeStart }
        onTouchEnd = { this._handleSwipeEnd }
        className = { this.props.className }
        style = { this.props.style }
      >

        { this.props.children }

      </this.props.tagName>
    );
  }
}

ReactSwipe.displayName = 'ReactSwipe';

export default ReactSwipe;
