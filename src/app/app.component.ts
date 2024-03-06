import { Component, OnInit } from "@angular/core";
import { slideUpDown, disappear } from "./app.animations";
import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideUpDown, disappear],
})
export class AppComponent implements OnInit {
  selectedCountries: any
  constructor() {}

  ngOnInit() {}
  
  handleSelect(data: any) {
    this.selectedCountries = data
  }


}
