import axios from "axios";
import { endpoints } from "./endpoints";
import { ToStConfig } from "./types";

export class TotalyStreamClient {

  tostConfig: ToStConfig;
  
  constructor(tostConfig: ToStConfig){
    this.tostConfig = tostConfig;
  }

  getStreamData(streamId: string){
    const { baseUrl } = this.tostConfig;
    endpoints.streams

  }

}