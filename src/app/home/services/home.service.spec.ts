import { TestBed, ComponentFixture, fakeAsync, tick, flush, async } from '@angular/core/testing';

import { Location } from '@angular/common';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { inject } from '@angular/core/src/di/injector_compatibility';


describe('HomeService http calls', () => {
    let httpTestingController: HttpTestingController;
    let homeService: HomeService;


    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [HttpClientTestingModule],
            providers: [
                HomeService
            ]
        });

        httpTestingController = TestBed.get(HttpTestingController); // technique to get a service instance
        // for ex- to get HeroService we can do perform technique
        homeService = TestBed.get(HomeService);
    });


});
