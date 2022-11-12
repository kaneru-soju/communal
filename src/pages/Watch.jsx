import '../styles/Watch.css'

import ReactPlayer from 'react-player'
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';
import { textAlign } from '@mui/system';
import { red } from '@mui/material/colors';


let messages = [
    {
      "text": "Moyai",
      "id": "1",
      "sender": {
        "name": "Aniruthan",
        "uid": "ani",
        "avatar": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/moai.png",
      },
    },
    {
        "text": "Moyai",
      "id": "1",
      "sender": {
        "name": "Sid",
        "uid": "ani",
        "avatar": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/moai.png",
      },
    },
    {
        "text": "Moyai",
      "id": "1",
      "sender": {
        "name": "Kaneru",
        "uid": "ani",
        "avatar": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/moai.png",
      },
    }
  ]

function Watch() {
    return (
        <div className='video-chat-container'>
            <div className='video-player'>
            <ReactPlayer url='videos/big_buck_bunny_720p_surround.mp4' />
            </div>
            <div className='chat-box'>
                <h5 style={{textAlign: 'center', padding: '5px', backgroundColor: 'black', color: 'white'}}>Chat</h5>
                <ChatBox
            messages={messages}
            onSubmit={(msg) => {
                messages.push( {
                    "text": msg,
                "id": "1",
                "sender": {
                    "name": "Sid",
                    "uid": "ani",
                    "avatar": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/moai.png",
                },
                })
            }}
            />
            </div>
        </div>

        
    );
}

export default Watch;
