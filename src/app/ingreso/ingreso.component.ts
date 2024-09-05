import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service'; // Importar el servicio

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  errorMessage: string = '';

  constructor(private clienteService: ClienteService, private router: Router) { }

  formatNumeroDocumento() {
    const value = this.numeroDocumento.replace(/\D/g, '');
    this.numeroDocumento = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  onBuscar() {
    console.log(this.tipoDocumento);
    console.log(this.numeroDocumento);
    if (this.tipoDocumento && this.numeroDocumento) {
      const cleanedNumeroDocumento = this.cleanNumeroDocumento();
      this.clienteService.getClienteInfo(this.tipoDocumento, cleanedNumeroDocumento)
        .subscribe(
          data => {

            console.log(data);

            localStorage.setItem('clientInfo', JSON.stringify(data));

            this.router.navigate(['/resumen']);
          },
          error => {
            this.errorMessage = 'Error al buscar la información del cliente.';
          }
        );
    } else {
      this.errorMessage = 'Tipo y número de documento son obligatorios.';
    }
  }
  cleanNumeroDocumento() {
    return this.numeroDocumento.replace(/,/g, '');
  }
}
