import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  categoria: any[] = [
    { value: 'general', nome: 'General'},
    { value: 'business', nome: 'Business'},
    { value: 'entertainment', nome: 'Entertainment'},
    { value: 'health', nome: 'Health'},
    { value: 'science', nome: 'Science'},
    { value: 'sports', nome: 'Sports'},
    { value: 'technology', nome: 'Technology'},
]

  paises: any[] = [
    { value: 'ar', nome: 'Argentina'},
    { value: 'br', nome: 'Brasil'},
    { value: 'fr', nome: 'Francia'},
    { value: 'hu', nome: 'Hungria'},
    { value: 'mx', nome: 'Mexico'},
    { value: 'gb', nome: 'Reino Unido'},
]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARMENTROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARMENTROS)

  }
}
