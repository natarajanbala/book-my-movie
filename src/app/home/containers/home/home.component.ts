import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';

import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  nowPlayingMoviesList: any = [];
  upcomingMoviesList: any = [];
  genresList: any = [];
  theaterList: any = [];
  userPreference: any = [];

  nowPlayingMoviesList$: Observable<any>;
  upcomingMoviesList$: Observable<any>;
  theaterList$: Observable<any>;
  userPreference$: Observable<any>;


  constructor(
    private store: Store<MovieState.State>,
    private userStore: Store<UserState.State>,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.getNewSetofNowPlayingMovies(1);
    this.nowPlayingMoviesList$ = this.store.select(MovieState.nowPlayingMoviesSelector);

    this.upcomingMoviesList$ = this.store.select(MovieState.upcomingMovieSelector);

    this.theaterList$ = this.store.select(MovieState.theaterList)
    .pipe(
      map(list => Object.values(list))
    );

    this.userPreference$ = this.userStore.select(UserState.userSelector)
    .pipe(
      map(user => user.preference)
    );

    this.genresList = this.homeService.getGenres();
  }

  getNewSetofNowPlayingMovies(page) {
    this.homeService.getNowshowing(page);
  }
  getNewSetofComingMovies(page) {
    this.homeService.getUpcomingMovies(page);
  }
}
