import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";
import { Router } from "../../../node_modules/@angular/router";

interface dispositivo {
  nombre: string;
  distanciaMinima: any;
  estado: any;
}

@Component({
  selector: "app-dispositivos",
  templateUrl: "./dispositivos.component.html",
  styleUrls: ["./dispositivos.component.scss"]
})
export class DispositivosComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium: ClrWizard;
  @ViewChild("wizard") wizard: ClrWizard;
  mdOpen: boolean = false;
  public open: boolean = false;
  public model: any;
  dispositivos: Array<dispositivo> = [];
  dispositivo1: dispositivo = {
    nombre: "Calefaccion",
    distanciaMinima: 2000,
    estado: 0
  };
  dispositivo2: dispositivo = {
    nombre: "Iluminacion",
    distanciaMinima: 10,
    estado: 0
  };
  dispositivo3: dispositivo = {
    nombre: "Dispositivos",
    distanciaMinima: 50,
    estado: 0
  };
  dispositivo4: dispositivo = {
    nombre: "EnchufesHabitacion",
    distanciaMinima: 2,
    estado: 0
  };

  constructor(public router: Router) {}

  ngOnInit() {
    this.model = {
      forceReset: true,
      nombre: ""
    };
    this.dispositivos.push(this.dispositivo1);
    this.dispositivos.push(this.dispositivo2);
    this.dispositivos.push(this.dispositivo3);
    this.dispositivos.push(this.dispositivo4);
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
  openN() {
    this.open = true;
  }

  finish() {
    this.router.navigate(["dispositivos"]);
  }


  cambiaDistancia(dispositivo, distancia) {
    let disp = this.dispositivos.find(dispositivo.nombre);
    disp.distanciaMinima = distancia;
  }

  cambiaEstado(dispositivo, estado) {
    let disp = this.dispositivos.find(dispositivo.nombre);
    disp.estado = estado;
  }

  cambiaNombre(dispositivo, nombre) {
    let disp = this.dispositivos.find(dispositivo.nombre);
    disp.nombre = nombre;
  }

  anhadeDispositivo(nom) {
    let disp = this.dispositivos.find(nom);

    if (disp == null) {
      this.dispositivos.push({ nombre: nom, distanciaMinima: 0, estado: 0 });
    }
  }

  eliminaDispositivo(nombre) {
    let disp = this.dispositivos.indexOf(nombre);
    if (disp != null) {
      this.dispositivos.splice(disp);
    }
  }
}
