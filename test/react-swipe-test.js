import React from 'react';
import { expect } from 'chai';
import { createRenderer } from 'react-addons-test-utils';
import ReactSwipe from '../src/react-swipe';

describe('react-swipe', () => {
  let instance;

  beforeEach(() => {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(React.createElement(ReactSwipe, {}, 'child text'));
    instance = shallowRenderer.getRenderOutput();
  });

  it('should be a div', () => {
    expect(instance.type).to.equal('div');
  });
});
