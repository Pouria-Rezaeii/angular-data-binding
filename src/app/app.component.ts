import { Component } from "@angular/core";
import { ServerElement } from "src/types/ServerElement";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  onAddServer = (serverElement: Omit<ServerElement, "type">) => {
    this.serverElements.push({
      type: "server",
      name: serverElement.name,
      content: serverElement.content,
    });
  };

  onAddBlueprint = (serverElement: Omit<ServerElement, "type">) => {
    this.serverElements.push({
      type: "blueprint",
      name: serverElement.name,
      content: serverElement.content,
    });
  };
}
