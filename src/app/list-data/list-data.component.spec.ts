import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataComponent } from './list-data.component';

describe('ListDataComponent', () => {
  let component: ListDataComponent;
  let fixture: ComponentFixture<ListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
