import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinipackComponent } from './minipack.component';

describe('MinipackComponent', () => {
  let component: MinipackComponent;
  let fixture: ComponentFixture<MinipackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinipackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinipackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
