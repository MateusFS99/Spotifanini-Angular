import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from './music.service';

@Component({
    selector: 'app-musics',
    templateUrl: './musics.component.html',
    styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

    public musics!: Music[];

    constructor(private musicService: MusicService) { }

    ngOnInit() {

        this.loadMusics();
        localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYXRldXNGUyIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4Mi9sb2dpbiIsImV4cCI6MTY2NjExNjE5OCwiaWF0IjoxNjY2MDI5Nzk4fQ.d_itR5LBMMIozvUjNAy5A9YCa7mbQrnb76bJSHb_RbU");
    }

    loadMusics() {

        this.musicService.getAll().subscribe(

            (musics: Music[]) => {

                this.musics = musics;
            },
            (error: any) => {

                console.error(error);
            }
        );
    }
}
