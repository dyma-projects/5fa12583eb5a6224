import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() compteurOutput: EventEmitter<number> = new EventEmitter();;

  constructor() { }

  ngOnInit() {
  }

  onPlusClick() {
    this.compteur++;
    this.compteurOutput.emit(this.compteur);
  }

  onMinusClick() {
    this.compteur--;
    this.compteurOutput.emit(this.compteur);
  }

}
