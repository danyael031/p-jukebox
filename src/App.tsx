import { useEffect } from 'react'
import appStyle from './App.module.css'
import { AudioPlayer } from './lib/audioPlayer'
import { service } from './service';
import { MediaControl } from './components/PlayerBar';

const audioPlayer = new AudioPlayer();

async function testPlayer(){
  let response = await service.getStream("RY66fdMt4vc");

  console.log(response);

  let sortAudioStream = response.data.audioStreams.sort((a, b)=> ( a.bitrate - b.bitrate ));

  let streamSong = sortAudioStream[0];

  if(!streamSong){
    return
  }

  audioPlayer.setSource(streamSong.url);
}

function App() {
  useEffect(()=>{
    testPlayer();

  })

  return (
    <div className={appStyle.App}>
      <div className={appStyle.content}>

      </div>
      <MediaControl/>
    </div>
  )
}

export default App
