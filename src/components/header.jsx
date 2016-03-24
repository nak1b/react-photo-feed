var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Photo Feed
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li><a>Topic #1</a></li>
            <li><a>Topic #2</a></li>
          </ul>
        </div>
    </nav>
  }
})
