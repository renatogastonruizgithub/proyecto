import { Injectable, Output ,EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
@Output() abrir:EventEmitter<any>=new EventEmitter();

  constructor() { }
}
