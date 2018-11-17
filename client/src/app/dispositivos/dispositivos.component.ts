import { Component, OnInit } from '@angular/core';
import {ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  @ViewChild("wizardmd") wizardMedium: ClrWizard;
  @ViewChild("wizard") wizard: ClrWizard;
  mdOpen: boolean = false;
  public open: boolean = false;
  public model: any;
  constructor(public router:Router) { }

  ngOnInit() {
    this.model = {
      forceReset: true,
      nombre: ""
  };
  }

  public doFinish(): void {
    this.doReset();
}

public doReset(): void {
    if (this.model.forceReset) {
        this.wizard.reset();
        this.model.nombre = "";
    }
}
openN(){
  this.open=true;
}

finish(){
  this.router.navigate(['dispositivos']);
}

}
