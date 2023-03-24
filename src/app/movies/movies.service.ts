import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiPopularResponse, Movie } from './types';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http
      .get<ApiPopularResponse>(
        'https://api.themoviedb.org/3/movie/popular?api_key=798865d2515c75e1f2966a2ca026c110&language=fr-FR&page=2'
      )
      .pipe(
        map((response) => {
          return response.results.map((item) => {
            return {
              id: item.id,
              title: item.title,
              description: item.overview,
              rating: item.vote_average,
              image: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
            } as Movie;
          });
        })
      );
  }
}
