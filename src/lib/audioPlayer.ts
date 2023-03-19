
export class AudioPlayer{
  audioElement: HTMLAudioElement;

  constructor(){
    this.audioElement = document.createElement("audio");
  }

  setSource(src: string){
    this.audioElement.setAttribute("src", src);
  }

  play(){
    this.audioElement.play()
  }

  puse(){
    this.audioElement.pause()
  }
}
