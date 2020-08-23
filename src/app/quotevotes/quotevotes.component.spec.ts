import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotevotesComponent } from './quotevotes.component';

describe('QuotevotesComponent', () => {
  let component: QuotevotesComponent;
  let fixture: ComponentFixture<QuotevotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotevotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotevotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
