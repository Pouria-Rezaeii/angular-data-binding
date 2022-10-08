import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  newServerName = "";
  newServerContent = "";
  serverElements: { name: string; type: string; content: string }[] = [
    { name: "test", type: "server", content: "a test content" },
  ];

  resetForm = () => {
    this.newServerContent = "";
    this.newServerName = "";
  };

  onAddServer() {
    this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    });
    this.resetForm();
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    });
    this.resetForm();
  }
}
