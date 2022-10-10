import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { ServerElement } from "src/types/ServerElement";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit, OnDestroy {
  newServerName = "";

  // using one way data binding as React does (passing a handler to the child component)
  @Input() onClickAddServer: (element: Omit<ServerElement, "type">) => void;

  // using two way data binding as Angular does, omitting custom event and outputting to the outer world
  @Output() onClickAddBlueprint = new EventEmitter<
    Omit<ServerElement, "type">
  >();

  @ViewChild("serverContentInput", { static: true })
  serverContentInputRef: ElementRef<HTMLInputElement>;

  // using local reference passed in from template
  onAddServer = (serverContentInput: HTMLInputElement) => {
    this.onClickAddServer({
      name: this.newServerName,
      content: serverContentInput.value,
    });
  };

  // using local reference by view child decorator
  onAddBlueprint = () => {
    this.onClickAddBlueprint.emit({
      name: this.newServerName,
      content: this.serverContentInputRef.nativeElement.value,
    });
  };

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
}
