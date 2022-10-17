import { Artist } from "./Artist";
import { Genre } from "./Genre";

export class Music {

    constructor() {

        this.id = 0;
        this.name = '';
        this.release = '';
        this.audio = '';
        this.genre = new Genre();
        this.artist = new Artist();
    }

    id: number;
    name: string;
    release: string;
    audio: string;
    genre: Genre;
    artist: Artist
}
