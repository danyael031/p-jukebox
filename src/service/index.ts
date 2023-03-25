import axios from "axios"
import { PIPED_API_ENDPOINT } from "../constants"
import { SearchResponse, StreamResponse } from "../types/service";

const serviceClient = axios.create({baseURL: PIPED_API_ENDPOINT});

export const service = {
  getStream: async ( streamId: string )=>{
    return serviceClient.get<StreamResponse>(`/streams/${streamId}`);
  },
  search: async (q: string)=>{
    return serviceClient.get<SearchResponse>(`/search?q=${q}&filter=music_songs`);
  }
}