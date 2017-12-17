import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor (props) {
      super (props);
      this.addTrack = this.addTrack.bind (this);
      this.removeTrack = this.removeTrack.bind (this);
  }

  hasID (id) {
    return (this.state.id === id) ? true : false;
  }

  addTrack() {
    this.props.onAdd (this.props.track);
  }

  removeTrack() {
    //console.log ('Remove Track ' + this.props.track.Album);
    this.props.onRemove (this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval===false) {
      return (
          <a className="Track-action" onClick={this.addTrack} >+</a>
      );
    } else {
      return (
          <a className="Track-action" onClick={this.removeTrack} >-</a>
      );
    }

  }

  render() {
    //console.log (this.props.track);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.Name}</h3>
          <p>{this.props.track.Artist} | <nobr>{this.props.track.Album}</nobr></p>
        </div>
        {this.renderAction()}
      </div>
        );
  }
}

export default Track;
