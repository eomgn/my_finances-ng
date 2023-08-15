import { Component } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
  // lista de menus
  menu: any[] = [
    { title: "Dashboard", icon: "dashboard", router: "dashboard" },
    { title: "Categorias", icon: "category", router: "categorias" },
    { title: "Entradas", icon: "login", router: "entradas" },
  ];
}
