import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import {GraphService} from '../services/graph.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public graphService: GraphService) { }

  consumoActual:any;

  ngOnInit() {
    this.consumoActual = (Math.random()*300).toFixed(1);
    // this.graphService.printLine("canvas1");
    this.graphService.printLine("canvas2");
  }

}
