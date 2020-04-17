import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlbumModel} from '../../../../models/AlbumModel';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(`https://jsonplaceholder.typicode.com/albums`)
  }
}
