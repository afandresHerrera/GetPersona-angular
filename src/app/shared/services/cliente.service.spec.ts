import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService]
    }).compileComponents();

    service = TestBed.inject(ClienteService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Ejemplo de prueba para verificar solicitudes HTTP
  it('should fetch data correctly', () => {
    const mockData = {
      ciudad: "Bogotá",
      direccion:"Calle 123",
      primerApellido:"Gómez",
      primerNombre:"Juan",
      segundoApellido:"Pérez",
      segundoNombre:"Carlos",
      telefono:"3001234567"
    }; 

    service.getClienteInfo("C", "23445322").subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('http://localhost:8090/cliente?tipoDocumento=C&numeroDocumento=23445322'); // Reemplaza 'your-api-url' con la URL real
    expect(req.request.method).toBe('GET');
    req.flush(mockData); 
  });
});
