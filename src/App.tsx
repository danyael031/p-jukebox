import appStyle from './App.module.css'
import { MediaControl } from './components/PlayerBar';
import { useSetAudioPlayerEvents } from './audioPlayer/useAudioPlayer';
import { audioPlayer } from './audioPlayer';

function App() {
  useSetAudioPlayerEvents(audioPlayer);
  return (
    <div className={appStyle.App}>
      <div className={appStyle.content}>

      </div>
      <MediaControl/>
    </div>
  )
}

export default App
