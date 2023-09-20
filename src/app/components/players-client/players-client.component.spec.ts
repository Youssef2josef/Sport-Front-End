import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersClientComponent } from './players-client.component';

describe('PlayersClientComponent', () => {
  let component: PlayersClientComponent;
  let fixture: ComponentFixture<PlayersClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
