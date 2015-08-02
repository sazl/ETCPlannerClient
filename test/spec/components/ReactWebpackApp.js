'use strict';

describe('ReactWebpackApp', () => {
  let React = require('react/addons');
  let ReactWebpackApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactWebpackApp = require('components/ReactWebpackApp.js');
    component = React.createElement(ReactWebpackApp);
  });

  it('should create a new instance of ReactWebpackApp', () => {
    expect(component).toBeDefined();
  });
});
