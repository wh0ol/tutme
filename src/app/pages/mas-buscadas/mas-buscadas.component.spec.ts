import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasBuscadasComponent } from './mas-buscadas.component';

describe('MasBuscadasComponent', () => {
  let component: MasBuscadasComponent;
  let fixture: ComponentFixture<MasBuscadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasBuscadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasBuscadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
