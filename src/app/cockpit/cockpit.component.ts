import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ServerElement } from "src/types/ServerElement";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  // using one way data binding as React does (passing a handler to the child component)
  @Input() onClickAddServer: (element: Omit<ServerElement, "type">) => void;

  // using two way data binding as Angular does, omitting custom event and outputting to the outer world
  @Output() onClickAddBlueprint = new EventEmitter<
    Omit<ServerElement, "type">
  >();

  onAddServer = () => {
    this.onClickAddServer({
      name: this.newServerName,
      content: this.newServerContent,
    });
  };

  onAddBlueprint = () => {
    this.onClickAddBlueprint.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  };

  ngOnInit(): void {}
}
