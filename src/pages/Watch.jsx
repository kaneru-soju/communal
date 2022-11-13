import React, { Component } from 'react';

import '../styles/Watch.css';

class Watch extends Component {
  state = {
    torrentInfoHash: "",
    torrentMagnetURI: "",
    torrentName: "",
    torrentProgress: "",
    torrentFiles: []
  }

  componentDidMount() {
    // Sintel, a free, Creative Commons movie
    var torrentId = 'magnet:?xt=urn:btih:7bb44d4560a9dae2722ed56e1019113cf0123d1b&dn=%5BOhys-Raws%5D%20Bleach%20Sennen%20Kessen%20Hen%20-%2005%20%28BS7%201280x720%20x264%20AAC%29.mp4&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce'

    var WebTorrent = require('webtorrent');
    var client = new WebTorrent();

    client.on('error', err => {
      console.log('[+] Webtorrent error: ' + err.message);
    });

    client.add(torrentId, (torrent) => {
      const interval = setInterval(() => {
        // console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
        this.setState({torrentProgress: (torrent.progress * 100).toFixed(1) + '%'});
      }, 5000);
      torrent.on('done', () => {
        console.log('Progress: 100%');
        clearInterval(interval);
      })

      this.setState({
        torrentInfoHash: torrent.infoHash,
        torrentMagnetURI: torrent.magnetURI,
        torrentName: torrent.name,
        torrentFiles: torrent.files
      });

      // TODO Figure out a better way to render these files 
      this.state.torrentFiles.map((file, i) => {
        file.appendTo('body');
      })

    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.torrentName}</h1>
        <p><b>Torrent Info Hash: </b>{this.state.torrentInfoHash}</p>
        <p><b>Torrent Progress: </b>{this.state.torrentProgress}</p>
      </div>
    );
  }
}

export default Watch;