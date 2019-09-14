import { SetNowPlayingMovies, SetUpcomingMovies, EMovieActionTypes, SetCastAndCrew } from './home.action';
import { Movie } from '../../models/movie.model';

describe('SetNowPlayingMovies', () => {
    it('should create an action', () => {
        const payload: Movie[] = [
            // tslint:disable-next-line: max-line-length
            {'popularity': '442.401', 'vote_count': 283, 'poster_path': '\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg', 'id': 474350, 'original_language': 'en', 'genre_ids': [35, 27], 'title': 'It Chapter Two', 'vote_average': 7.2, 'overview': '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.', 'release_date': '2019-09-06'}
        ];
        const action = new SetNowPlayingMovies(payload);
        console.log('action spec ---------------- ', action);
        expect(action).toEqual({ type: EMovieActionTypes.SET_NOW_PLAYING_MOVIES, payload});
    });
});

describe('SetUpcomingMovies', () => {
    it('should create an action', () => {
        const payload: Movie[] = [
            // tslint:disable-next-line: max-line-length
            {'popularity': '442.401', 'vote_count': 283, 'poster_path': '\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg', 'id': 474350, 'original_language': 'en', 'genre_ids': [35, 27], 'title': 'It Chapter Two', 'vote_average': 7.2, 'overview': '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.', 'release_date': '2019-09-06'}
        ];
        const action = new SetUpcomingMovies(payload);
        expect(action).toEqual({ type: EMovieActionTypes.SET_UPCOMING_MOVIES, payload});
    });
});

describe('SetCastAndCrew', () => {
    it('should create an action', () => {
        const payload: any = {'id': 458156, 'cast':
            // tslint:disable-next-line: max-line-length
            [{'cast_id': 12, 'character': 'The Adjudicator', 'credit_id': '5b03148b0e0a2623ec01b0c0', 'gender': 0, 'id': 1776040, 'name': 'Asia Kate Dillon', 'order': 5, 'profile_path': '/jJutYe9XAaCrHyKGi3nIpCOwwkR.jpg'} ], 'crew': [{'credit_id': '5c412670c3a368694e42b02f', 'department': 'Writing', 'gender': 0, 'id': 1076800, 'job': 'Characters', 'name': 'Derek Kolstad', 'profile_path': '/mi6jxGxkIPjEKNSu9BquWoFMTZy.jpg'} ]
        };
        const action = new SetCastAndCrew(payload);
        expect(action).toEqual({ type: EMovieActionTypes.SET_CAST_AND_CREW, payload});
    });
});

describe('SetTheaters', () => {
    it('should create an action', () => {});
});
