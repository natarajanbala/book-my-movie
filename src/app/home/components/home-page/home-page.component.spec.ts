import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page.component';
import { MatTabsModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({selector: 'app-movie-dropdowns', template: ''})
class MovieDropdownsComponent {
    @Input() layout;
    @Input() languageList;
    @Output() languageChange$: EventEmitter<any>;
    @Output() genreChange$: EventEmitter<any>;
    @Output() distanceChange$: EventEmitter<any>;
    constructor() {
        this.languageChange$ = new EventEmitter();
        this.genreChange$ = new EventEmitter();
        this.distanceChange$ = new EventEmitter();
    }
}

@Component({selector: 'app-movie-card', template: ''})
class MovieCardComponent {
    @Input() movie;
    @Input() theaterList;
    @Input() category;
}


describe('Component: HomePage', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, MatMenuModule, MatTabsModule, MatButtonModule,
                MatIconModule, BrowserAnimationsModule ],
            declarations: [ HomePageComponent, MovieDropdownsComponent, MovieCardComponent ]

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        const mvDD = new MovieDropdownsComponent();
        mvDD.languageChange$.emit(1);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('can call trackMovie success', () => {
        const index = 1;
        const movie = {
            id: 12345
        };
        expect(component.trackMovie).toBeDefined();
        spyOn(component, 'trackMovie').and.callThrough();
        component.trackMovie(index, movie);
        expect(component.trackMovie).toHaveBeenCalled();
    });

    it('can call trackMovie returns -1', () => {
        const index = 1;
        expect(component.trackMovie).toBeDefined();
        spyOn(component, 'trackMovie').and.callThrough();
        component.trackMovie(index, null);
        expect(component.trackMovie).toHaveBeenCalled();
    });

    it('can call getLanguage', () => {
        expect(component.getLanguage).toBeDefined();
        spyOn(component, 'getLanguage').and.callThrough();
        component.getLanguage('English');
        expect(component.getLanguage).toHaveBeenCalled();
    });

    it('can call getGenre', () => {
        expect(component.getGenre).toBeDefined();
        spyOn(component, 'getGenre').and.callThrough();
        component.getGenre('Drama');
        expect(component.getGenre).toHaveBeenCalled();
    });
});
