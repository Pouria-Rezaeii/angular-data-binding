import { Component, Input, OnInit } from "@angular/core";
import { ServerElement } from "src/types/ServerElement";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: ServerElement;

  ngOnInit(): void {}
}
