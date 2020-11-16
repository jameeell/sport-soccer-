import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordResComponent } from './word-res.component';

describe('WordResComponent', () => {
  let component: WordResComponent;
  let fixture: ComponentFixture<WordResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
