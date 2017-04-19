import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * [getPosition returns a position element that works for mouse or touch events]
 * @param  {[Event]} event [the received event]
 * @return {[Object]}      [x and y coords]
 */
function getPosition(event) {
  if ('touches' in event) {
    const { pageX, pageY } = event.touches[0];
    return { x: pageX, y: pageY };
  }

  const { screenX, screenY } = event;
  return { x: screenX, y: screenY };
}

class ReactSwipe extends Component {
  static propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    allowMouseEvents: PropTypes.bool,
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
    allowMouseEvents: false,
    onSwipeUp() {},
    onSwipeDown() {},
    onSwipeLeft() {},
    onSwipeRight() {},
    onSwipeStart() {},
    onSwipeMove() {},
    onSwipeEnd() {}
  }

  constructor(...args) {
    super(...args);
    this._handleSwipeStart = this._handleSwipeStart.bind(this);
    this._handleSwipeMove = this._handleSwipeMove.bind(this);
    this._handleSwipeEnd = this._handleSwipeEnd.bind(this);

    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }

  _onMouseDown(event) {
    if (!this.props.allowMouseEvents) {
      return;
    }

    this.mouseDown = true;

    document.addEventListener('mouseup', this._onMouseUp);
    document.addEventListener('mousemove', this._onMouseMove);

    this._handleSwipeStart(event);
  }

  _onMouseMove(event) {
    if (!this.mouseDown) {
      return;
    }

    this._handleSwipeMove(event);
  }

  _onMouseUp(event) {
    this.mouseDown = false;

    document.removeEventListener('mouseup', this._onMouseUp);
    document.removeEventListener('mousemove', this._onMouseMove);

    this._handleSwipeEnd(event);
  }

  _handleSwipeStart(event) {
    const { x, y } = getPosition(event);
    this.moveStart = { x, y };
    this.props.onSwipeStart(event);
  }

  _handleSwipeMove(event) {
    const { x, y } = getPosition(event);
    const deltaX = x - this.moveStart.x;
    const deltaY = y - this.moveStart.y;
    this.moving = true;

    // handling the responsability of cancelling the scroll to
    // the component handling the event
    const shouldPreventDefault = this.props.onSwipeMove({
      x: deltaX,
      y: deltaY
    }, event);

    if (shouldPreventDefault) {
      event.preventDefault();
    }

    this.movePosition = { deltaX, deltaY };
  }

  _handleSwipeEnd(event) {
    this.props.onSwipeEnd(event);

    if (this.moving) {
      if (this.movePosition.deltaX < 0) {
        this.props.onSwipeLeft(1, event);
      } else if (this.movePosition.deltaX > 0) {
        this.props.onSwipeRight(1, event);
      }
      if (this.movePosition.deltaY < 0) {
        this.props.onSwipeUp(1, event);
      } else if (this.movePosition.deltaY > 0) {
        this.props.onSwipeDown(1, event);
      }
    }

    this.moveStart = null;
    this.moving = false;
    this.movePosition = null;
  }

  render() {
    return (
      <this.props.tagName
        onMouseDown = { this._onMouseDown }
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
