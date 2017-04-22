import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { QualiToastTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CampagneDetailComponent } from '../../../../../../main/webapp/app/entities/campagne/campagne-detail.component';
import { CampagneService } from '../../../../../../main/webapp/app/entities/campagne/campagne.service';
import { Campagne } from '../../../../../../main/webapp/app/entities/campagne/campagne.model';

describe('Component Tests', () => {

    describe('Campagne Management Detail Component', () => {
        let comp: CampagneDetailComponent;
        let fixture: ComponentFixture<CampagneDetailComponent>;
        let service: CampagneService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualiToastTestModule],
                declarations: [CampagneDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CampagneService,
                    EventManager
                ]
            }).overrideComponent(CampagneDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CampagneDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CampagneService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Campagne(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.campagne).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});