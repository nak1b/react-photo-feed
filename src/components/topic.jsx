var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImageStore = require('../store/image-store');
var ImagePreview = require('../components/image-preview');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange')],
  getInitialState: function(){
    return {
      images: []
    }
  },
  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps){
      Actions.getImages(nextProps.params.id);
  },
  render: function(){
    return <div className="topic">
    {this.renderImages()}
    </div>
  },
  renderImages: function(){
    return this.state.images.slice(0,20).map(function(image){
      return <ImagePreview key={image.id} {...image} />
    });
  },
  onChange: function(event, images){
    this.setState({
      images: images
    })
    console.log(this.state.images);
  }
})
