import { useEffect } from "react";
//import { useAppStore } from "../../zustand"




export function Root(){

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080/ws");
    ws.addEventListener('message', (e)=>{
      console.log(e);
    })
    ws.onopen = ()=>{
      ws.send("test message")
    }
  },[])



  return (
    <div>
      ROOT
      WebSocket Test
    </div>
  )
}
