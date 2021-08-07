import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoangular',
  templateUrl: './demoangular.component.html',
  styleUrls: ['./demoangular.component.scss']
})
export class DemoangularComponent implements OnInit {
  title:string = 'angular-commerce';
  nuevoNombre:string = 'nuevo'
  time = new Date()
  private _listaPrivada:string[] = []
  public listNombres:string[] = [
    'Gricel',
    'Pedro',
    'Carlos',
    'Luciano'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  hacerClick(){
    console.log('boton')
  }

  addPerson(){
    this.listNombres.push(this.nuevoNombre)
  }

  deleteItem(index:number){
    this.listNombres.splice(index,1)
  }
}
