import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
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

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service
      .getPopularMovies()
      .subscribe((movies) => (this.movies = movies));
  }
}
