import axios from "axios"
import { PIPED_API_ENDPOINT } from "../constants"
import { StreamResponse } from "./types";

const serviceClient = axios.create({baseURL: PIPED_API_ENDPOINT});

export const service = {
  getStream: async ( streamId: string )=>{
    return serviceClient.get<StreamResponse>(`/streams/${streamId}`);
  }
}