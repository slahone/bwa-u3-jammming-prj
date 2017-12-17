import React, { Component } from 'react';
import './App.css';
import Spotify from '../../util/Spotify.js';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import MyPlaylists from '../MyPlaylists/MyPlaylists';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchResults: [],              // Search results are stored here
      playlistName: "New PlayList",   // The playlist name here
      playlistTracks: [],             // The selected tracks, starts as empty array
      playlists: []                   // array of current playlist names and IDs
    };
    //***************************
    // All the boilerplate
    //***************************
    this.addTrack = this.addTrack.bind (this);
    this.removeTrack = this.removeTrack.bind (this);
    this.updatePlaylistName = this.updatePlaylistName.bind (this);
    this.savePlaylist = this.savePlaylist.bind (this);
    this.search = this.search.bind (this);
    this.removePlaylist = this.removePlaylist.bind (this);
  }

  //************************************************************
  // Add a new track to a playlist if it is not already there
  // first run a filter to see if the track is already there.
  // if not, add to list and save to state
  //************************************************************
  addTrack (trackToAdd) {
    let newID = trackToAdd.ID;
    let current = this.state.playlistTracks.filter (track => track.ID===newID);
    if (current.length===0) {   // implies no match, so add track
      let playlist = this.state.playlistTracks;
      playlist.push (trackToAdd);
      this.setState ({playlistTracks : playlist});
    }
  }

  //************************************************************
  // Remove a track from a playlist.
  // simply run a filter with non-matched IDs and save result to state
  //************************************************************
  removeTrack (trackToDelete) {
    let delID = trackToDelete.ID;
    this.setState ({
      playlistTracks : this.state.playlistTracks.filter (track => track.ID !== delID)
    });
  }

  //***************************************************************
  // Update a playlist's name - is passed the name field value
  // and sets int into the app state: playlistName
  //***************************************************************
  updatePlaylistName (name) {
    this.setState ( {
      playlistName: name
    })
  }

  //***************************************************************
  // Handler for remove Playlist function - calls Spotify.removePlaylist
  // passes in the playlist object to delete and the app object
  // actual state update is carried out inside the Spotify module
  //***************************************************************
  removePlaylist (playlistToDelete) {
    Spotify.removePlaylist (playlistToDelete, this);
  }

  //***************************************************************
  // Playlist can not be saved if #tracks is zero or more than 100.
  // do these preliminary checks, and if passed, then save playlist
  // to Spotify module, savePlayList function.  Passes the playlist name,
  // playlist tracks array (not the URI array), and the app object.
  //***************************************************************
  savePlaylist() {
    let trackCount = this.state.playlistTracks.length;
    if (trackCount===0)  {
      alert ('No tracks to save to playlist');
      return;
    }
    if (trackCount>100) {
      alert ('Too many tracks, maximum allowed is 100');
      return;
    }
    //let trackURIs = [];
    //this.state.playlistTracks.map (track => trackURIs.push (track.uri));
    Spotify.savePlaylist (this.state.playlistName, this.state.playlistTracks, this);
  }

  //***************************************************************
  // Search Spotify for the specified term.  Also passes in the app object
  //***************************************************************
  search(term) {
    Spotify.search (term, this);
  }

  render() {
    //console.log ('App State');
    //console.log (this.state);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
            <MyPlaylists playlists={this.state.playlists} onRemove={this.removePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
