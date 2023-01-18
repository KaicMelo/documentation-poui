import { PoSelectOption } from '@po-ui/ng-components';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  @Input()
  index!: number;
  @Output() changeStep = new EventEmitter();
  @Output() duplicateCycle = new EventEmitter();
  @Output() deleteCycle = new EventEmitter();
  @Input() configureCycleStep: any = {};

  labels?: string[];
  actions: any= [
    { label: 'Deletar', action: () => this.delete(this) },
    { label: 'Duplicar', action: () => this.duplicate(this) },
  ];

  readonly options: Array<PoSelectOption> = [
    { label: 'Premissas Macroeconômicas', value: '1' },
    { label: 'Base de pessoas', value: '2' },
    { label: 'Premissas e informações de gente', value: '3' },
    { label: 'Premissas, informações de Benefícios', value: '4' },
    { label: 'Informações de gente Centralizada', value: '5' },
    { label: 'Informações de gente Descentralizada', value: '6' },
    { label: 'Informações de Benefícios Centralizado', value: '7' },
    { label: 'Informações de Benefícios Descentralizado', value: '8' }
  ];


  constructor() { }

async ngOnInit(): Promise<void> {
  }

  onChange() {
    // this.changeStep.emit({ cycle: this.configureCycleStep, index: this.index });
  }

  private delete({ index }: any) {
    this.deleteCycle.emit(index);
  }

  private duplicate({ configureCycleStep }: any) {
    // this.duplicateCycle.emit({ cycle: configureCycleStep, index: this.index });
  }

}
