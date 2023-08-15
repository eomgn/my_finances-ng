import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../service/dashboard.service";
import { Entrada } from "../../models/entrada.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  meses = [
    { value: 0, viewValue: "Janeiro" },
    { value: 1, viewValue: "Fevereiro" },
    { value: 2, viewValue: "Março" },
    { value: 3, viewValue: "Abril" },
    { value: 4, viewValue: "Maio" },
    { value: 5, viewValue: "Junho" },
    { value: 6, viewValue: "Julho" },
    { value: 7, viewValue: "Agosto" },
    { value: 8, viewValue: "Setembro" },
    { value: 9, viewValue: "Outubro" },
    { value: 10, viewValue: "Novembro" },
    { value: 11, viewValue: "Dezembro" },
  ];

  entradas: any[] = [];
  receitas: number = 0;
  despesas: number = 0;
  saldo: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getEntradas().subscribe((response) => {
      this.entradas = response;

      // metodos
      this.getReceitas();
      this.getSaldo();
    });
  }

  getReceitas() {
    this.entradas.forEach((data: Entrada) => {
      if (data.tipo === "receita") {
        this.receitas += parseInt(data.valor);
      } else {
        this.despesas += parseInt(data.valor);
      }
    });
  }

  getSaldo() {
    this.saldo = this.receitas - this.despesas;
  }
}
