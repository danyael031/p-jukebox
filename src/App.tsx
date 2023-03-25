import appStyle from './App.module.css'
import { MediaControl } from './components/PlayerBar';
import { useSetAudioPlayerEvents } from './audioPlayer/useAudioPlayer';
import { audioPlayer } from './audioPlayer';
import { router } from './router';
import {
  RouterProvider,
} from "react-router-dom";
import { SearchBar } from './components/SearchBar';


function App() {
  useSetAudioPlayerEvents(audioPlayer);
  return (
    <div className={appStyle.App}>
      <div className={appStyle.content}>
        <RouterProvider router={router}/>
      </div>
      <MediaControl/>
    </div>
  )
}

export default App
