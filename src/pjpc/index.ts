
export class PJPC {
	public rtcPeerConnection: RTCPeerConnection;
	private iceServer: string = "stun:stun3.l.google.com:19302"

	constructor(){
		let configuration: RTCConfiguration = {
			iceServers: [
				{ urls: this.iceServer }
			]
		}  
		this.rtcPeerConnection = new RTCPeerConnection(configuration);
	}

	initialize(){

		
	}




}
