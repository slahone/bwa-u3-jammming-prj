import React from 'react';
import './MyPlaylists.css';
import PlaylistName from '../PlaylistName/PlaylistName';

class MyPlaylists extends React.Component {

  render() {
    //console.log (this.props.playlists);
    if (this.props.playlists)
    {
      return (
        <div className="MyPlaylists">
          <h2 className="PlayListHdr">My Playlists</h2>
          <div>
            { this.props.playlists.map (playlist =>  <PlaylistName key={playlist.id} playlist={playlist} onRemove={this.props.onRemove} /> ) }
          </div>
        </div>
      )
    } else {
      return (
        <div className="MyPlaylists">
          No playlist names loaded.
        </div>
      )
    }

  }
}

export default MyPlaylists;
