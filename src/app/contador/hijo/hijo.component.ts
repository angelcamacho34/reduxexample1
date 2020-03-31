import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  contador: number;
  /* @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>(); */
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({ numero: 3 }));
  }

 /*  resetNieto(newContador) {
    this.contador = newContador;
    // this.cambioContador.emit(this.contador);
  } */
}
