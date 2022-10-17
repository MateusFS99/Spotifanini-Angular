import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Music } from '../models/music';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    baseURL = `${environment.MainURL}/music`;
    
    constructor(private http: HttpClient) { }

    getAll(): Observable<Music[]> {

        return this.http.get<Music[]>(`${this.baseURL}`, {headers: new HttpHeaders({

            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        })});
    }

    getById(id: number): Observable<Music> {

        return this.http.get<Music>(`${this.baseURL}/${id}`);
    }

    post(Music: Music) {

        return this.http.post(`${this.baseURL}`, Music);
    }

    put(Music: Music) {

        return this.http.put(`${this.baseURL}/${Music.id}`, Music);
    }

    delete(id: number) {

        return this.http.delete(`${this.baseURL}/${id}`);
    }
}
