import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IngresoComponent } from './ingreso.component';
import { FormsModule } from '@angular/forms'; // Si el componente usa formularios
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { HttpClient } from '@angular/common/http';

describe('IngresoComponent', () => {
  let component: IngresoComponent;
  let fixture: ComponentFixture<IngresoComponent>;
  let httpMock: HttpTestingController;
  let myService: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresoComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ClienteService, HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IngresoComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    myService = TestBed.inject(ClienteService);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should call the method on button click', () => {
  //   spyOn(component, 'onBuscar');

  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();

  //   expect(component.onBuscar).toHaveBeenCalled();
  // });


});
