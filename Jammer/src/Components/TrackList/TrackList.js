import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    if (this.props.tracks===undefined) {
      return (
        <div className="TrackList">
        </div>
      )
    }
    else {
      if (!this.props.tracks) {
        return (
          <div> Tracks not defined </div>
        )
      }
      return (
        <div className="TrackList">
            {
              this.props.tracks.map (track => <Track key={track.ID} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>)
            }
        </div>
      );
    }
  }
}

export default TrackList;
