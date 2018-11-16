import { Injectable } from '@angular/core';
import { Chart } from "chart.js";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }
  
  canvas: any = {};
  public chart = [];

  printLine(canvas) {
      // console.log(matches[0]._author)
      // let matchesUser = matches.filter(match=> {
      //   match._author=this.user._id})
      //   console.log(matchesUser)
      this.canvas = <HTMLCanvasElement>document.getElementById(`${canvas}`);
      var ctx = this.canvas.getContext("2d");
      this.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ],
          datasets: [
            {
              data: [
                 0,
                 1,
                 2,
                 3,
                 4,
                 5,
                 6,
                 7,
                 8,
                 9,
                 1,
                 1
              ],
              label: "Consumo Energetico",
              borderColor: "#3e95cd",
              backgroundColor:"#3e95cd"
            }
          ]
        },
        options: {
          responsive:true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display:false,
                ticks: {
                    suggestedMin: 0,
                }
            }]
        },
          title: {
            display: true
          }
        }
      });
    }

  printRadar(canvas) {
    this.canvas = <HTMLCanvasElement>document.getElementById(`${canvas}`);
    var ctx = this.canvas.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "radar",

      data: {
        labels: ["Drive", "Backhand", "Serve", "Volley", "Resistance"],
        datasets: [
          {
            label: "Your Statistics",
            data: [
             1,2,3,4,5
            ],
            borderColor: "rgba(20, 29, 222, 1)",
            backgroundColor: "rgba(20, 29, 222, 0.2)"
          },
          {
            label: ["  Media"],
            data: [1, 2, 5, 8, 4],
            borderColor: "rgba(255, 99, 132, 0.2)",
            backgroundColor: "rgba(255, 99, 132, 0.2)"
          }
        ]
      },
      options: {
        position: "left",
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom",
          labels: {}
        },
        scale: {
          // Hides the scale
          ticks: {
            // changes here
            display:false,
            max: 10,
            min: 0
          }
        }
      }
    });
  }
}
