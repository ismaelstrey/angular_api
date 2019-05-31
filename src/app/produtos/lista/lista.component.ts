import { Component, OnInit } from '@angular/core';
import { ProdutoItem } from 'src/app/produtos.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: ProdutoItem[];
  error: any;

  constructor() { }

  ngOnInit() {
  }

}
