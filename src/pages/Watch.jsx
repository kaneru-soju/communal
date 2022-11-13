import WebTorrent from 'webtorrent';

import '../styles/Watch.css';

        
function Watch() {
  const client = new WebTorrent();
  console.log(client);
  const torrentId = 'magnet:?xt=urn:btih:03c75389c96437f8608cd8f7d19c482b14fcd486&dn=%5BAnime%20Land%5D%20One%20Piece%201039%20%28WEBRip%201080p%20Hi10P%20AAC%29%20RAW%20%5B16CBC36C%5D.mp4&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce';

  client.add(torrentId, function (torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    const file = torrent.files.find(function (file) {
      return file.name.endsWith('.mp4')
    })

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('body')
  })
  return (
      <div></div>
  );
}

export default Watch;
