import React from 'react';
import './PlaylistName.css';

//print out a single playlist name
class PlaylistName extends React.Component {
  constructor (props) {
    super (props);
    this.removePlaylist = this.removePlaylist.bind (this);
    this.renderAction = this.renderAction.bind (this);
  }

  removePlaylist() {
    console.log ('Remove Playlist ' + this.props.playlist.name);
    this.props.onRemove (this.props.playlist);
  }


  renderAction() {
      return (
          <a className="Playlist-action" onClick={this.removePlaylist} >-</a>
      );
  }

  render() {
    //console.log (this.props.playlist.name);
    return (
      <div className="PlaylistName">
        <span className="Playlist-information">{this.props.playlist.name}</span><span className="action">{ this.renderAction() }</span>

      </div>
    )
  }
}

export default PlaylistName;
