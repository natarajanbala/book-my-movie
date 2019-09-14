import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement, Input, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';


@Component({selector: 'app-home-page', template: ''})
class HomePageComponent {
  @Input() moviesList: any;
  @Input() upcomingList: any;
  @Input() theaterList: any;
  @Input() userPreference: any;
  @Output()
  getNewNowPlayingMovies: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  getNewUpcomingMovies: EventEmitter<number> = new EventEmitter<number>();
}

describe('Component: Home', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let debugEl: DebugElement;
    let homeService: HomeService;
    let getNowshowingSpy;
    let getGenresSpy;
    let getUpcomingMoviesSpy;

    const storeMock = {
        select() {
            // tslint:disable-next-line: quotemark
            // tslint:disable-next-line: max-line-length
            return of({popularity: 442.401, vote_count: 283, video: false, poster_path: '\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg', id: 474350, adult: false, backdrop_path: '\/p15fLYp0X04mS8cbHVj7mZ6PBBE.jpg', original_language: 'en', original_title: 'It Chapter Two', genre_ids: [35, 27], title: 'It Chapter Two', vote_average: 7.2, overview: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.', release_date: '2019-09-06'});
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ HomeComponent, HomePageComponent],
            providers: [
                HomeService,
                { provide: Store, useValue: storeMock}
            ]

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        homeService = debugEl.injector.get(HomeService);
        getNowshowingSpy = spyOn(homeService, 'getNowshowing');
        getGenresSpy = spyOn(homeService, 'getGenres');
        getUpcomingMoviesSpy = spyOn(homeService, 'getUpcomingMovies');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call homeservice.getNowshowing ', () => {
        expect(getNowshowingSpy).toHaveBeenCalled();
    });

    it('should call homeservice.getGenres ', () => {
        expect(getGenresSpy).toHaveBeenCalled();
    });

    it('should call homeservice.getUpcomingMovies ', () => {
        expect(getUpcomingMoviesSpy).toHaveBeenCalled();
    });
});
