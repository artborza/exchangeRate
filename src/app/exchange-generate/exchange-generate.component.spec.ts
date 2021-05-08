import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeGenerateComponent } from './exchange-generate.component';

describe('ExchangeGenerateComponent', () => {
  let component: ExchangeGenerateComponent;
  let fixture: ComponentFixture<ExchangeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
