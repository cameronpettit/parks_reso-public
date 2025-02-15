import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Utils } from 'src/app/shared/utils/utils';

import { RegistrationModule } from '../registration.module';

import { FacilitySelectComponent } from './facility-select.component';

describe('FacilitySelectComponent', () => {
  let component: FacilitySelectComponent;
  let fixture: ComponentFixture<FacilitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RegistrationModule],
      providers: [ConfigService, HttpClient, HttpHandler, Utils]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('availability text display', () => {
    function setupVisitTimeState(facilities: any[], visitDate: Date): void {
      // initialize the component
      component.facilities = facilities;
      component.ngOnInit();
      fixture.detectChanges();

      // set the visit date
      component.myForm.patchValue({
        visitDate: {
          year: visitDate.toLocaleString('en-US', { year: 'numeric', timeZone: 'America/Vancouver' }),
          month: visitDate.toLocaleString('en-US', { month: 'numeric', timeZone: 'America/Vancouver' }),
          day: visitDate.toLocaleString('en-US', { day: 'numeric', timeZone: 'America/Vancouver' })
        }
      });
      const datePickerComponent = fixture.debugElement.query(By.css('app-date-picker'));
      datePickerComponent.triggerEventHandler('formChangeEvent', null);
      fixture.detectChanges();

      // pick a facility
      const facilityElement = fixture.debugElement;
      const passTypeElement = facilityElement.query(By.css('[data-testid="passtype-select"]')).nativeElement;
      passTypeElement.value = passTypeElement.options[1].value;
      passTypeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
    }

    it('should show high availability with no bookings', () => {
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 1 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'High',
                  max: 1
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        new Date('2021-11-23T20:02:00.000-08:00')
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - High');
    });

    it('should show high availability with 75% of spots available', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 100 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'High',
                  max: 1
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - High');
    });

    it('should show moderate availability with 25% of spots available', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 100 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'Moderate',
                  max: 1
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - Moderate');
    });

    it('should show low availability with 24% of spots available', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 100 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'Low',
                  max: 1
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - Low');
    });

    it('should show as full with no spots available', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 100 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'Full',
                  max: 0
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - Full');
    });

    it('should show as full when overbooked', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 100 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'Full',
                  max: 0
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - Full');
    });

    it('should show as full when zero spots available', () => {
      const date = new Date('2021-11-23T20:02:00.000-08:00');
      setupVisitTimeState(
        [
          {
            visible: true,
            bookingTimes: { DAY: { max: 0 } },
            status: { stateReason: null, state: 'open' },
            sk: 'Test facility 1',
            pk: 'facility::Garibaldi Provincial Park',
            name: 'Test facility 1',
            reservations: {
              '2021-11-23': {
                DAY: {
                  capacity: 'Full',
                  max: 0
                }
              }
            },
            type: 'Parking',
            bookingDays: {
              'Sunday': true,
              'Monday': true,
              'Tuesday': true,
              'Wednesday': true,
              'Thursday': true,
              'Friday': true,
              'Saturday': true,
            },
            bookableHolidays: [],
            bookingDaysRichText: ''
          }
        ],
        date
      );

      const textElement = fixture.debugElement.query(By.css('[data-testid="day-availability-text"]'));
      expect(textElement.nativeElement.textContent).toContain('Pass availability - Full');

      const inputElement = fixture.debugElement.query(By.css('[data-testid="day-input"]'));
      expect(inputElement.nativeElement.disabled).toBe(true);
    });
  });
});
