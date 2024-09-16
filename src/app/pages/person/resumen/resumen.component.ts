import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  clientInfo: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
    const clientInfo = localStorage.getItem('clientInfo');
    if (clientInfo) {
      this.clientInfo = JSON.parse(clientInfo);
    } else {
      this.router.navigate(['/ingreso']);
    }
  }

  onVolver() {
    this.router.navigate(['/ingreso']);
  }
}
