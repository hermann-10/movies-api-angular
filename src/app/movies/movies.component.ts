import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let movie of movies">
        <div class="card">
          <img
            src="https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}"
            alt=""
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
        <strong></strong>
      </div>
    </div>
  `,
  styles: [],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor() {}

  ngOnInit(): void {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=798865d2515c75e1f2966a2ca026c110&language=fr-FR&page=2'
    )
      .then((response) => response.json())
      .then((result: any) => {
        this.movies = result.results;
      });
  }
}
