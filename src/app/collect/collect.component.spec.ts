import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectComponent } from './collect.component';

describe('MyMusicComponent', () => {
  let component: CollectComponent;
  let fixture: ComponentFixture<CollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
