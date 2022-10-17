import { Album } from "./Album";
import { Genre } from "./Genre";

export class Music {

    constructor() {

        this.id = 0;
        this.name = '';
        this.release = '';
        this.audio = '';
        this.genre = new Genre();
        this.album = new Album();
    }

    id: number;
    name: string;
    release: string;
    audio: string;
    genre: Genre;
    album: Album
}
