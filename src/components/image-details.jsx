var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../store/image-store');
var Actions = require('../actions');
var CommentStore = require('../store/comment-store');
var CommentsBox = require('./comment-box');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange'),
           Reflux.listenTo(CommentStore, 'onChange')],
  getInitialState: function(){
    return {
      image: null,
      comments: null
    }
  },
  componentWillMount: function(){
    Actions.getImage(this.props.params.id);
  },
  render: function(){
    return <div className="image-detail">
      {this.state.image ? this.renderContent() : null}
    </div>
  },
  renderContent: function(){
    return <div className="panel panel-default">
      <div className="panel-heading">
        <h2>{this.state.image.title}</h2>
      </div>
      <div className="panel-body">
        {this.renderImage()}
      </div>
      <div className="panel-footer">
        {this.state.image.description}
      </div>

      <h3>Comments</h3>
      {this.rednerComments()}
    </div>
  },
  renderImage: function(){
    if(this.state.image.animated){
      return <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source  src={this.state.image.mp4} type="video/mp4"></source>
      </video>
    }else{
      return <img src={this.state.image.link} />
    }
  },
  onChange: function(){
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comments: CommentStore.comment
    });
  },
  rednerComments: function(){
    if(!this.state.comments){
      return null
    }else{
      return <CommentsBox comments={this.state.comments} />
    }
  }
})
