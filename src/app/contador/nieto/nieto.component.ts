import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { resetear } from '../contador.actions';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  /*   @Input() contador: number;
    @Output() contadorCambio = new EventEmitter<number>(); */
  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  reset() {
    /*  this.contador = 0;
     this.contadorCambio.emit(this.contador); */
    this.store.dispatch(resetear());
  }
}
