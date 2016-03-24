var React = require('react');


module.exports = React.createClass({
  render: function(){
     return <div>
       Header Here
       {this.props.children}
     </div>
  }
});
