// require('./Hello.less');

var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <span>Hello, React!</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
});
