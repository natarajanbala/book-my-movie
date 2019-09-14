import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { MatMenuModule, MatAutocompleteModule, MatDialog } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SeatReservationModalComponent } from 'src/app/shared/components/modals/seat-reservation-modal/seat-reservation-modal.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const matDialogStub = {
    open: (dialogComponentName1, object2) => ({
      afterClosed: () => {
        return { subscribe: result => [] };
      }
    }),
    closeAll: () => ({
      afterClosed: () => {
        return { subscribe: result => [] };
      }
    })
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatAutocompleteModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieCardComponent, SeatReservationModalComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialogStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = {
        'popularity': 100.01,
        'vote_count': 10,
        'video': false,
        'poster_path': '/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg',
        'id': 540901,
        'adult': false,
        'backdrop_path': '/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg',
        'original_language': 'en',
        'original_title': 'Hustlers',
        'genre_ids': [
          35,
          80
        ],
        'title': 'Hustlers',
        'vote_average': 8,
        // tslint:disable-next-line: max-line-length
        'overview': 'Inspired by Jessica Pressler\'s "The Hustlers at Scores," which details a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients.',
        'release_date': '2019-09-13',
        'casts': [
          {
            'cast_id': 4,
            'character': 'Destiny',
            'credit_id': '5c57cd680e0a26031bc9f176',
            'gender': 1,
            'id': 206444,
            'name': 'Constance Wu',
            'order': 0,
            'profile_path': '/9vOl1928QXXdl3yWAUbjSeaNUF9.jpg'
          },
          {
            'cast_id': 0,
            'character': 'Ramona',
            'credit_id': '5b68bfd4c3a368188610b80c',
            'gender': 1,
            'id': 16866,
            'name': 'Jennifer Lopez',
            'order': 1,
            'profile_path': '/mxBDIyt8u4q5eJcQkGipNYTtlvz.jpg'
          },
          {
            'cast_id': 15,
            'character': 'Elizabeth',
            'credit_id': '5c912c110e0a2663c751f0e2',
            'gender': 1,
            'id': 12041,
            'name': 'Julia Stiles',
            'order': 2,
            'profile_path': '/zPE9HjxYZ3UwPkCQ5K0wJqG99Tg.jpg'
          },
          {
            'cast_id': 14,
            'character': 'Mercedes',
            'credit_id': '5c912c059251410f939ec3a9',
            'gender': 1,
            'id': 74688,
            'name': 'Keke Palmer',
            'order': 3,
            'profile_path': '/tj3fxH0LtMVpj9fX8kj4kDSSkRu.jpg'
          },
          {
            'cast_id': 13,
            'character': 'Annabelle',
            'credit_id': '5c912bfcc3a36861195131ed',
            'gender': 1,
            'id': 1136940,
            'name': 'Lili Reinhart',
            'order': 4,
            'profile_path': '/7q9dCds3jDkSBo9FgtNRwOwRLxr.jpg'
          }
        ],
        'crews': [
          {
            'credit_id': '5b68bfe992514140640d79dd',
            'department': 'Directing',
            'gender': 1,
            'id': 71551,
            'job': 'Director',
            'name': 'Lorene Scafaria',
            'profile_path': '/oyCNPihT154DgcmD81dNd1JnfkV.jpg'
          },
          {
            'credit_id': '5b68bffec3a36818941071fa',
            'department': 'Writing',
            'gender': 1,
            'id': 71551,
            'job': 'Screenplay',
            'name': 'Lorene Scafaria',
            'profile_path': '/oyCNPihT154DgcmD81dNd1JnfkV.jpg'
          },
          {
            'credit_id': '5b68c13e0e0a267ef40def0b',
            'department': 'Production',
            'gender': 1,
            'id': 52004,
            'job': 'Producer',
            'name': 'Elaine Goldsmith-Thomas',
            'profile_path': '/vOSPgWa0WArrn0WcHjfuLhhTriZ.jpg'
          },
          {
            'credit_id': '5c57d2b49251410e1d511516',
            'department': 'Production',
            'gender': 2,
            'id': 66733,
            'job': 'Producer',
            'name': 'Benny Medina',
            'profile_path': null
          },
          {
            'credit_id': '5c57d31ec3a368424685cb82',
            'department': 'Production',
            'gender': 1,
            'id': 16866,
            'job': 'Producer',
            'name': 'Jennifer Lopez',
            'profile_path': '/mxBDIyt8u4q5eJcQkGipNYTtlvz.jpg'
          }
        ]
      };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can call onValChange method', () => {
    const socialPlatform = 'google';
    expect(component.onValChange).toBeDefined();
    spyOn(component, 'onValChange').and.callThrough();
    component.onValChange(socialPlatform);
    expect(component.onValChange).toHaveBeenCalled();
  });

  it('can call isInvalid method', () => {
    expect(component.isInvalid).toBeDefined();
    spyOn(component, 'isInvalid').and.callThrough();
    component.isInvalid();
    expect(component.isInvalid).toHaveBeenCalled();
  });

  it('can call checKToDialog method', () => {
    expect(component.checKToDialog).toBeDefined();
    spyOn(component, 'checKToDialog').and.callThrough();
    component.checKToDialog();
    expect(component.checKToDialog).toHaveBeenCalled();
  });

  it('can call preBookDialog method', () => {
    expect(component.preBookDialog).toBeDefined();
    spyOn(component, 'preBookDialog').and.callThrough();
    component.preBookDialog();
    expect(component.preBookDialog).toHaveBeenCalled();
  });

  it('can call openDialog method', () => {
    expect(component.openDialog).toBeDefined();
    spyOn(component, 'openDialog').and.callThrough();
    component.openDialog();
    expect(component.openDialog).toHaveBeenCalled();
  });

  it('can call trackCastandCrew method', () => {
    const index = 1;
    const cast = {
      is: 1
    };
    expect(component.trackCastandCrew).toBeDefined();
    spyOn(component, 'trackCastandCrew').and.callThrough();
    component.trackCastandCrew(index, cast);
    expect(component.trackCastandCrew).toHaveBeenCalled();
  });

  it('can call ngOnChanges   method', () => {
    expect(component.ngOnChanges).toBeDefined();
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });
});
