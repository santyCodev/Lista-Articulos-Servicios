import { Component } from '@angular/core';
import { ArticulosService } from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos = null;
  
  constructor(private articulosServicio: ArticulosService) {
  }
  
  ngOnInit() {
    this.articulos=this.articulosServicio.retornar();
  }
}
