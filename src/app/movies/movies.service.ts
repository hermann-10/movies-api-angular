import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPopularResponse } from './types';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    const request = this.http.get<ApiPopularResponse>(
      'https://api.themoviedb.org/3/movie/popular?api_key=798865d2515c75e1f2966a2ca026c110&language=fr-FR&page=2'
    );

    return request;
  }
}
