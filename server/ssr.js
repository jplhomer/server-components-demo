const {SsrRoot} = require('../src/Root.client');
const {createFromReadableStream} = require('react-server-dom-webpack');
const {renderToPipeableStream} = require('react-dom/server');
const React = require('react');

module.exports = function renderToSsrPipeableStream(rscReadable) {
  const response = createFromReadableStream(rscReadable);
  const SsrApp = React.createElement(
    SsrRoot,
    {},
    React.createElement(() => response.readRoot())
  );
  const {pipe} = renderToPipeableStream(SsrApp);

  return {pipe};
};
