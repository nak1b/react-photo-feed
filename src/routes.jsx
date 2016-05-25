var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetails = require('./components/image-details');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/topics/:id" component={Topic} />
      <Route path="/image/:id" component={ImageDetails} />
    </Route>
  </Router>
);
