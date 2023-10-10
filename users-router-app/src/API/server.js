import {API} from "./API";
import {albumURL,
    photosURL,
    usersURL} from "./URL";

export const userAPI = new API(usersURL)
export const albumAPI = new API(albumURL)

export const photosAPI = new API(photosURL)