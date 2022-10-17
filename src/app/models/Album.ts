import { Artist } from "./Artist";

export class Album {

    constructor() {

        this.id = 0;
        this.name = '';
        this.image = '';
        this.artist = new Artist();
    }

    id: number;
    name: string;
    image: string;
    artist: Artist;
}
