import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiPopularResponse, Movie, Movies } from './types';

@Component({
  selector: 'app-movies',
  template: `
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let movie of movies">
        <div class="card">
          <img src="{{ movie.image }}" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p>{{ movie.description }}</p>
          </div>
        </div>
        <strong></strong>
      </div>
    </div>
  `,
  styles: [],
})
export class MoviesComponent implements OnInit {
  movies: Movies = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const request = this.http.get<ApiPopularResponse>(
      'https://api.themoviedb.org/3/movie/popular?api_key=798865d2515c75e1f2966a2ca026c110&language=fr-FR&page=2'
    );

    request.subscribe((response) => {
      this.movies = response.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.overview,
          rating: item.vote_average,
          image: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
        };
      });
    });
  }
}
